import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import {
  ChatMessageType,
  createMessageType,
} from "../../contexts/chat/chat-type";
import Button from "../common/button.component";
import {
  FlexBox,
  SectionContainer,
  SectionTitle,
} from "../common/container.component";
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
  const fileRef = useRef<HTMLInputElement>(null);
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

  const onFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      setMessage({
        ...message,
        img_url: URL.createObjectURL(files[0]),
        type: "image",
      });
    }
  };

  const onClick = useCallback(() => {
    if (message.message || message.type === "image") {
      onSubmit(message);
      setMessage(messageState); // setting to old state
    }
  }, [onSubmit, message]);
  return (
    <SectionContainer>
      <FlexBox className="justify-between">
        <SectionTitle title="Chat Message" />

        <input
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = "";
          }}
          onChange={onFileChange}
          ref={fileRef}
          type="file"
          hidden
        />
        {!message.img_url ? (
          <Button onClick={(e) => fileRef.current?.click()} title="Add Image" />
        ) : (
          <Button
            onClick={(e) => {
              setMessage({ ...message, img_url: "", type: "message" });
            }}
            title="Remove Image"
          />
        )}
      </FlexBox>
      {message.img_url && (
        <img
          src={message.img_url}
          className="w-full object-cover my-2"
          style={{ height: "200px" }}
          alt=""
        />
      )}
      <Input
        value={message.sender_name}
        onChange={onChange}
        name="sender_name"
        label="Sender Name"
        placeholder="For Group Chats Only"
      />
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
