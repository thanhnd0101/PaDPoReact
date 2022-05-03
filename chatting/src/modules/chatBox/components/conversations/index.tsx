import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listConversationsOf } from "../../apiCalls/listConversationsOf";
import ConversationItem from "./conversationItem";

export type Participant = {
  id: string;
  name: string;
};

export type Sender = {
  id: string;
  name: string;
};

export type LastMessage = {
  id: string;
  text: string;
  sender: Sender;
  createdAt: Date;
};

export type Conversation = {
  id: string;
  participants: Participant[];
  lastMessage: LastMessage;
};

export type RootObject = {
  sort: string;
  rows: Conversation[];
  cursor_next: string;
  cursor_prev: string;
};

export default function Conversations() {
  const account = useSelector((state: any) => state.account);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    console.log(account);
    listConversationsOf({ accountId: account.id }).then((res) => {
      if (res.status === 200) {
        setConversations(res.data.rows);
      }
    });
  }, [account.id]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </ul>
    </div>
  );
}
