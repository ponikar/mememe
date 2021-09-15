import React, { FC, useCallback, useState } from "react";
import { useMessage } from "../../contexts/chat/message.hook";
import Button from "../common/button.component";
import { SectionContainer } from "../common/container.component";
import { Input } from "../common/input.component";

export const AddDateLabel: FC = () => {
  const [message, setMessage] = useState("Today");
  const { addNewMessage } = useMessage();
  const addMessage = useCallback(() => {
    if (!message) return;
    addNewMessage({
      seen: "no",
      message,
      time: "",
      from: null,
      type: "label",
    });
  }, [addNewMessage, message]);
  return (
    <SectionContainer title="Date Label">
      <div className="flex items-center">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-1/2"
          placeholder="3rd Jan or Today"
        />
        <Button onClick={addMessage} className="w-2/12" title="Add" />
      </div>
    </SectionContainer>
  );
};
