import React from "react";
import { FlexBox, SectionContainer } from "../common/container.component";
import { Input, Select, TextArea } from "../common/input.component";

export const AddMessage = () => {
  return (
    <SectionContainer title="Chat Messages">
      <TextArea label="Add New Message" />
      <FlexBox>
        <Select label="Receiver/Sender">
          <option value="receiver">Receiver</option>
          <option value="sender">Sender</option>
        </Select>
        <Select label="Seen">
          <option value="receiver">Yes</option>
          <option value="sender">No</option>
        </Select>
        <Input label="Message Time" />
      </FlexBox>
    </SectionContainer>
  );
};
