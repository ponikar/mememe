import React, { FC, useCallback } from "react";
import { useMessage } from "../../contexts/chat/message.hook";
import { Model } from "../model/model.component";
import { MessageForm } from "./message-form.component";

export const EditMessage: FC = () => {
  const { messageID, getMessage, updateMessage, setMessageID } = useMessage();

  const hideBox = useCallback(() => {
    setMessageID(null);
  }, [messageID]);

  const onSubmit = useCallback(
    (message) => {
      updateMessage(message);
      hideBox();
    },
    [messageID, updateMessage, setMessageID]
  );

  return messageID ? (
    <Model onBackPress={hideBox}>
      <MessageForm onSubmit={onSubmit} messageState={getMessage(messageID)} />
    </Model>
  ) : (
    <div />
  );
};
