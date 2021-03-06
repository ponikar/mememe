import React from "react";
import { useMessage } from "../../../../contexts/chat/message.hook";
import { isFromSame } from "../../../../helpers/messages.helper";
import { MessageContainer } from "../../../common/message-container.component";
import { AndroidWhatsappLabel } from "../label/android-whatsapp-label.component";
import { AndroidWhatsappMessageItem } from "./android-whatsapp-message-item.component";

export const AndroidWhatsappMessageCollection = () => {
  const { messages } = useMessage();

  return (
    <MessageContainer>
      {messages.map((msg, index) => {
        return msg.type === "label" ? (
          <AndroidWhatsappLabel key={msg.id} {...msg} />
        ) : (
          <AndroidWhatsappMessageItem
            prevToMe={isFromSame(messages, index)}
            sender={msg.from === "sender"}
            {...msg}
            index={index}
            key={msg.id}
          />
        );
      })}
    </MessageContainer>
  );
};
