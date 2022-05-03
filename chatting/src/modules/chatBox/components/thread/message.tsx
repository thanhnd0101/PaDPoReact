import React from "react";
import { useSelector } from "react-redux";
import { Message as MessageRow } from ".";

export default function Message({ message }: { message: MessageRow }) {
  const account = useSelector((state: any) => state.account);

  const hostMessage = (
    <div className="w-full flex flex-row-reverse items-center space-x-6">
      <img
        className="w-6 h-6 m-3 bg-gray-300 rounded-full flex-shrink-0"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt=""
      />
      <div className="text-left">
        <p className="text-gray-900 text-sm font-medium truncate">
          {message.text}
        </p>
      </div>
    </div>
  );
  const participantMessage = (
    <div className="w-full flex items-center space-x-6">
      <img
        className="w-6 h-6 m-3 bg-gray-300 rounded-full flex-shrink-0"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt=""
      />
      <div className="flex-1 truncate">
        <p className="text-gray-900 text-sm font-medium truncate">
          {message.text}
        </p>
      </div>
    </div>
  );
  return (
    <li className="my-1">
      {account.id === message.sender.id ? hostMessage : participantMessage}
    </li>
  );
}
