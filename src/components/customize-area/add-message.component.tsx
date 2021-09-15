import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { createMessageType } from "../../contexts/chat/chat-type";
import { useMessage } from "../../contexts/chat/message.hook";
import Button from "../common/button.component";
import { FlexBox, SectionContainer } from "../common/container.component";
import { Input, Select, TextArea } from "../common/input.component";

export const AddMessage = () => {
  const { addNewMessage } = useMessage();
  const [message, setMessage] = useState<createMessageType>({
    message: "New Message",
    seen: "yes",
    time: "10:30 AM",
    from: "receiver",
    type: "message",
  });

  const add = () => {
    addNewMessage(message);
  };

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >) => {
    setMessage({ ...message, [name]: value });
    console.log("WORKING", name, value);
  };
  return (
    <SectionContainer title="Chat Messages">
      <TextArea
        value={message.message}
        name="message"
        onChange={onChange}
        label="Add New Message"
      />
      <FlexBox>
        <Select
          onChange={onChange}
          name="from"
          value={message.from ? message.from : ""}
          label="Receiver/Sender"
        >
          <option value="receiver">Receiver</option>
          <option value="sender">Sender</option>
        </Select>
        <Select
          onChange={onChange}
          name="seen"
          value={message.seen}
          label="Seen"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
        <Input
          value={message.time}
          onChange={onChange}
          name="time"
          label="Message Time"
        />
      </FlexBox>

      <Button onClick={add} title="Add" className="w-full" />
    </SectionContainer>
  );
};
