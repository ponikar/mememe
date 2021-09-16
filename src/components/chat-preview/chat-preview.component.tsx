import React from "react";
import { AndroidWhatsappTheme } from "../android/whatsapp/android-whatsapp-theme.component";
import { FlexBox } from "../common/container.component";
import { MessageFrame } from "../common/message-frame.component";
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

      <FlexBox className="w-full px-3 mt-5 justify-between bg-ios-dark-second py-2">
        <FlexBox className="items-start justify-start flex-col">
          <h2> Select Theme: </h2>
          <FlexBox className="mt-2">
            <div className="p-2 mx-1 bg-ios-dark-back rounded">
              <img
                className="w-8"
                src="./src/svgs/whatsapp/whatsapp.svg"
                alt=""
              />
            </div>
            <div className="p-2 mx-1 rounded">
              <img className="w-8" src="./src/svgs/ios/imessage.svg" alt="" />
            </div>
          </FlexBox>
        </FlexBox>

        <div>Download button</div>
      </FlexBox>
    </section>
  );
};
