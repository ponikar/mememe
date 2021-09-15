import React from "react";
import { AndroidWhatsappTheme } from "../android/whatsapp/android-whatsapp-theme.component";
import { MessageFrame } from "../common/message-frame.component";

export const MesssagePreview = () => {
  return (
    <section className="col-span-2 flex p-10 justify-center items-center border border-black">
      <MessageFrame
        style={{
          backgroundImage: `url('./src/svgs/whatsapp-background.svg')`,
          backgroundSize: "cover",
        }}
      >
        {/* <IMessageTheme /> */}
        <AndroidWhatsappTheme />
      </MessageFrame>
    </section>
  );
};
