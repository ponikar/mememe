import React from "react";
import { AndroidWhatsappTheme } from "../android/whatsapp/android-whatsapp-theme.component";
import { FlexBox } from "../common/container.component";
import { MessageFrame } from "../common/message-frame.component";
import { SelectTheme } from "../customize-area/select-theme.component";
import { IMessageTheme } from "../ios/imessage/imessage-theme.component";

export const MesssagePreview = () => {
  return (
    <section className="col-span-2 bg-ios-dark-back flex-col flex p-10 justify-around items-center border border-black">
      <MessageFrame
        style={{
          backgroundImage: `url('./src/svgs/whatsapp-background.svg')`,
          backgroundSize: "cover",
        }}
      >
        {/* <IMessageTheme /> */}
        <AndroidWhatsappTheme />
      </MessageFrame>

      <SelectTheme />
    </section>
  );
};
