import React, { FC } from "react";
import { useMessage } from "../../../../../contexts/chat/message.hook";
import { isFromIOSSame } from "../../../../../helpers/messages.helper";
import { MessageContainer } from "../../../../common/message-container.component";
import { IMessageItem } from "../message-item/message-item.component";
import { IMessageLabel } from "../message-item/message-label.component";

export const IMessageCollection: FC = () => {
  const { messages } = useMessage();
  return (
    <MessageContainer>
      <IMessageLabel className="mt-4">
        <p className="font-semibold">iMessage</p>
      </IMessageLabel>
      {messages.map((msg, index) => {
        return msg.type === "label" ? (
          <IMessageLabel className={index == 0 ? "mb-2" : "mt-4 mb-2"}>
            <p className="font-semibold"> {msg.message} </p>
          </IMessageLabel>
        ) : (
          <IMessageItem
            prevToMe={isFromIOSSame(messages, index)}
            index={index}
            key={msg.id}
            {...msg}
          />
        );
      })}
    </MessageContainer>
  );
};
