import React, { ChangeEvent, FC, useCallback, useState } from "react";
import {
  ChatMessageType,
  createMessageType,
} from "../../contexts/chat/chat-type";
import Button from "../common/button.component";
import { FlexBox, SectionContainer } from "../common/container.component";
import { Input, Select, TextArea } from "../common/input.component";

type messageType = ChatMessageType | createMessageType;
interface MessageFormProps {
  messageState: messageType;
  onSubmit: (props: messageType) => void;
}

export const MessageForm: FC<MessageFormProps> = ({
  messageState,
  onSubmit,
}) => {
  const [message, setMessage] = useState<createMessageType | ChatMessageType>(
    messageState
  );
  const onChange = useCallback(
    ({
      target: { name, value },
    }: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >) => {
      setMessage({ ...message, [name]: value });
    },
    [message, setMessage]
  );

  const onClick = useCallback(() => {
    if (message.message) {
      onSubmit(message);
    }
  }, [onSubmit, message]);

  return (
    <SectionContainer title="Chat Messages">
      <TextArea
        value={message.message}
        name="message"
        onChange={onChange}
        label="Add New Message"
      />
      <FlexBox className="flex-wrap">
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

      <Button onClick={onClick} title="Add" className="w-full" />
    </SectionContainer>
  );
};
