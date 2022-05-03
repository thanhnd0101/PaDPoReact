import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMessagesOf } from "../../apiCalls/listMessagesOf";
import { sendMessage } from "../../apiCalls/sendMessage";
import Message from "./message";

export type Sender = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  text: string;
  createdAt: Date;
  sender: Sender;
};

export type MessageAPIResponse = {
  sort: string;
  rows: Message[];
  cursor_next: string;
  cursor_prev: string;
};

export default function Thread() {
  const conversation = useSelector((state: any) => state.conversation);
  const account = useSelector((state: any) => state.account);
  const dispatch = useDispatch();

  const [messagesRes, setMessagesRes] = useState<MessageAPIResponse>();
  useEffect(() => {
    listMessagesOf({
      accountId: account.id,
      conversationId: conversation.id,
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data.sort);
        const rows =
          res.data.sort == "OLDEST_FIRST"
            ? [...res.data.rows.reverse()]
            : [...res.data.rows];
        setMessagesRes({
          ...res.data,
          rows: rows,
        });
      }
    });
  }, [conversation]);

  function message(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = (event.target as HTMLFormElement).elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const text = element.value;
    if (text) {
      sendMessage({
        accountId: account.id,
        conversationId: conversation.id,
        text: text,
      }).then((res) => {
        setMessagesRes((prev) => {
          if (prev) {
            return {
              ...prev,
              rows: [
                {
                  id: res.data.id,
                  text: text,
                  createdAt: res.data.createdAt,
                  sender: { id: account.id, name: account.name },
                },
                ...prev.rows,
              ],
            };
          }
        });
      });
      element.value = "";
    }
  }

  function onScroll(event: React.UIEvent<HTMLUListElement>) {
    const target = event.currentTarget;
    if (target.scrollHeight + target.scrollTop === target.clientHeight) {
      listMessagesOf({
        accountId: account.id,
        conversationId: conversation.id,
        cursor: messagesRes?.cursor_prev,
      }).then((res) => {
        if (res.status === 200 && res.data.rows.length > 0) {
          const rows =
            res.data.sort == "OLDEST_FIRST"
              ? [...res.data.rows.reverse()]
              : [...res.data.rows];
          setMessagesRes((prev) => {
            if (prev) {
              return {
                ...prev,
                rows: [...prev.rows, ...rows],
                cursor_prev: res.data.cursor_next,
              };
            }
          });
        }
      });
    }
  }

  return (
    <>
      <ul
        className="bg-slate-50 h-96 max-h-96 overflow-y-auto scroll-auto flex flex-col-reverse"
        onScroll={onScroll}
      >
        {messagesRes?.rows.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="w-5/6">
          <form onSubmit={message} className="relative">
            <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden ">
              <textarea
                rows={3}
                name="message"
                id="message"
                className="block w-full py-3 border-0 resize-none sm:text-sm"
                placeholder="type a message"
                defaultValue={""}
              />

              <div className="py-2" aria-hidden="true">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
