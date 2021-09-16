import React, { FC } from "react";
import { IMessageHeader } from "./header/header.component";
import { IMessageInputField } from "./input-field/input-field.component";
import { IMessageCollection } from "./messages/message-container/message-container.component";

export const IMessageTheme: FC = () => {
  return (
    <>
      {/* Header */}
      <IMessageHeader />
      {/* Message Area */}
      <IMessageCollection />

      <IMessageInputField />
    </>
  );
};
