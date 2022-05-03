import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Conversations from "./components/conversations";
import Thread from "./components/thread";

export default function ChatBox() {
  const conversation = useSelector((state: any) => state.conversation);

  return (
    <div className="h-full flex flex-wrap">
      <div className="lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-128">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <Conversations />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden pl-5">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"></div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {conversation.id ? (
              <Thread />
            ) : (
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
