import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { createMessageType } from "../../contexts/chat/chat-type";
import { useMessage } from "../../contexts/chat/message.hook";
import Button from "../common/button.component";
import { FlexBox, SectionContainer } from "../common/container.component";
import { Input, Select, TextArea } from "../common/input.component";
import { MessageForm } from "./message-form.component";

const INITIAL_STATE: createMessageType = {
  message: "",
  seen: "yes",
  time: "10:30 AM",
  from: "receiver",
  type: "message",
};

export const AddMessage = () => {
  const { addNewMessage } = useMessage();

  return (
    <MessageForm
      onSubmit={(props) => addNewMessage(props)}
      messageState={INITIAL_STATE}
    />
  );
};
