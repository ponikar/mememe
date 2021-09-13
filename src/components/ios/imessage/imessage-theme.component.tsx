import React, { FC } from "react";
import { IMessageHeader } from "./header/header.component";
import { IMessageInputField } from "./input-field/input-field.component";
import { IMessageContainer } from "./messages/message-container/message-container.component";
import { IMessageItem } from "./messages/message-item/message-item.component";
import { IMessageLabel } from "./messages/message-item/message-label.component";

export const IMessageTheme: FC = () => {
  return (
    <>
      {/* Header */}
      <IMessageHeader />
      {/* Message Area */}
      <IMessageContainer>
        <IMessageLabel>
          <p className="font-semibold">iMessage</p>
          <p>
            <span className="font-semibold">Today</span> 10:14 AM
          </p>
        </IMessageLabel>

        <IMessageItem delivered sender message="Hey! How you doing?" />
        <IMessageItem message="Fine! Wbu?" />
      </IMessageContainer>
      <IMessageInputField />
    </>
  );
};
