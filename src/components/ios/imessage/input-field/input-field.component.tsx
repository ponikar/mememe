import React from "react";
import { IMessageInput } from "./imessage-input.component";
import { IMessageInputMedia } from "./input-media.component";
import { IMessageInputUtil } from "./input-util.component";

export const IMessageInputField = () => {
  return (
    <>
      <section className="flex w-full px-3 items-center py-2">
        <IMessageInputMedia />
        <IMessageInput />
      </section>
      <IMessageInputUtil />
    </>
  );
};
