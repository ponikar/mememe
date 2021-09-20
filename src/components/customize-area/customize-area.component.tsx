import React from "react";
import { AddDateLabel } from "./add-date-label.component";
import { AddMessage } from "./add-message.component";
import { ChatHeader } from "./chat-header.component";
import { EditMessage } from "./edit-message.component";
import { MessageEditCollection } from "./message-edit-collection.component";

export const CustomizeArea = () => {
  return (
    <section className="bg-ios-dark-back">
      <ChatHeader />
      <AddDateLabel />
      <AddMessage />
      <EditMessage />
      <MessageEditCollection />
    </section>
  );
};
