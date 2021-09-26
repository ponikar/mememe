import React, { ChangeEvent, useRef } from "react";
import { useHeader } from "../../contexts/chat/header.hook";
import Button from "../common/button.component";
import {
  FlexBox,
  SectionContainer,
  SectionTitle,
} from "../common/container.component";
import { Input } from "../common/input.component";

export const ChatHeader = () => {
  const [{ profileName, activity_status }, updateHeader] = useHeader();

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    updateHeader({ [name]: value });
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const onFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files?.length && files[0])
      updateHeader({ profileImage: URL.createObjectURL(files[0]) });
  };

  const openFile = () => {
    fileRef.current && fileRef.current.click();
  };

  return (
    <SectionContainer>
      <FlexBox className="justify-between">
        <SectionTitle title="Chat Header" />
        <input ref={fileRef} onChange={onFileChange} hidden type="file" />
        <Button onClick={openFile} title="Add Profile Picture" />
      </FlexBox>
      <FlexBox className="flex-wrap">
        <Input
          name="profileName"
          onChange={onChange}
          value={profileName}
          label="Profile Name"
          placeholder="Prem Chopra"
        />
        <Input
          onChange={onChange}
          name="activity_status"
          value={activity_status}
          label="Activity Status"
          placeholder="Online"
        />
      </FlexBox>
    </SectionContainer>
  );
};
