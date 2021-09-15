import React from "react";
import { useMessage } from "../../../../contexts/chat/message.hook";
import { AndroidWhatsappLabel } from "../label/android-whatsapp-label.component";
import { AndroidWhatsappMessageItem } from "./android-whatsapp-message-item.component";

export const AndroidWhatsappMessageCollection = () => {
  const { messages } = useMessage();

  return (
    <section
      style={{ maxHeight: "100%" }}
      className="flex-grow overflow-auto px-5"
    >
      {Object.entries(messages).map(([key, msg], index) => {
        return msg.type === "label" ? (
          <AndroidWhatsappLabel key={key} {...msg} />
        ) : (
          <AndroidWhatsappMessageItem
            sender={msg.from === "sender"}
            {...msg}
            key={key}
          />
        );
      })}
    </section>
  );
};
