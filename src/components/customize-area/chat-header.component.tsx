import React from "react";
import { useChatContext } from "../../contexts/chat/chat.context";
import Button from "../common/button.component";
import {
  FlexBox,
  SectionContainer,
  SectionTitle,
} from "../common/container.component";
import { Input } from "../common/input.component";

export const ChatHeader = () => {
  const {
    state: {
      header: { profileName, username },
    },
    dispatch,
  } = useChatContext();
  return (
    <SectionContainer>
      <FlexBox className="justify-between">
        <SectionTitle title="Chat Header" />
        <Button title="Add Profile Picture" />
      </FlexBox>
      <FlexBox>
        <Input label="Profile Name" />
        <Input label="Username" />
      </FlexBox>
    </SectionContainer>
  );
};
