import React from "react";
import { SectionContainer } from "../common/container.component";
import { MessageEditItem } from "./message-edit-item.component";
export const MessageEditCollection = () => {
  return (
    <SectionContainer title="Messages">
      <div className="h-72 border border-ios-border px-2 max-h-72 overflow-auto">
        <MessageEditItem />
      </div>
    </SectionContainer>
  );
};
