import React from "react";
import { useMessage } from "../../contexts/chat/message.hook";
import { SectionContainer } from "../common/container.component";
import { MessageEditItem } from "./message-edit-item.component";
export const MessageEditCollection = () => {
  const { messages } = useMessage();
  return (
    <SectionContainer title="Messages">
      <div className="h-72 border border-ios-border px-2 max-h-72 overflow-auto">
        {messages.map((msg, index) => (
          <MessageEditItem key={msg.id} {...msg} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};
