import React from "react";
import { AddMessage } from "./add-message.component";
import { ChatHeader } from "./chat-header.component";

export const CustomizeArea = () => {
  return (
    <section className="border bg-ios-dark-back  border-black">
      <ChatHeader />
      <AddMessage />
    </section>
  );
};
