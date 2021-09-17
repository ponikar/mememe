import React from "react";
import { useChatTheme } from "../../contexts/chat-theme/chat-theme.context";
import { MessageFrame } from "../common/message-frame.component";
import { CurrentTheme } from "../customize-area/current-theme.component";
import { SelectTheme } from "../customize-area/select-theme.component";

export const MesssagePreview = () => {
  const {
    theme: { style = {} },
  } = useChatTheme();
  return (
    <section className="col-span-2 bg-ios-dark-back flex-col flex p-10 justify-around items-center border border-black">
      <MessageFrame style={style}>
        <CurrentTheme />
      </MessageFrame>
      <SelectTheme />
    </section>
  );
};
