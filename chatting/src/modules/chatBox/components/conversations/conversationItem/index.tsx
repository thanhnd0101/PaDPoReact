import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Conversation } from "..";
import { optinConversationAC } from "../../../reducers";
import { useDispatch } from "react-redux";

export default function ConversationItem({
  conversation,
}: {
  conversation: Conversation;
}) {
  const dispatch = useDispatch();
  function chooseConversation() {
    dispatch(optinConversationAC(conversation));
  }
  return (
    <li key={conversation.id}>
      <div
        className="block hover:bg-gray-50 hover:cursor-pointer"
        onClick={chooseConversation}
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.squarespace-cdn.com/content/v1/5bd7818f9b7d1521593e0842/1562179587533-NPXR66ADAKG84ZUQ54H9/9.png"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {conversation.participants
                    .map((participant) => participant.name)
                    .join(", ")}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">
                    {`Last message ${conversation.lastMessage.createdAt}`}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
