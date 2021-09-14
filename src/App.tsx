import React, { FC } from "react";
import { AndroidWhatsappTheme } from "./components/android/whatsapp/android-whatsapp-theme.component";
import { MessageFrame } from "./components/common/message-frame.component";
import { IMessageTheme } from "./components/ios/imessage/imessage-theme.component";

const App: FC = () => {
  return (
    <main className="sm:w-10/12 w-full text-ios-text mx-auto border grid sm:grid-cols-3">
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
      <section className="border border-red-900">Customize area</section>
    </main>
  );
};

export default App;
