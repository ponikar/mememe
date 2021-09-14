import React, { FC } from "react";
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
          <nav className="p-2 flex bg-android-whatsapp-primary shadow-md justify-between">
            <div className="flex items-center">
              <img src="./src/svgs/arrow-left.svg" />
              <img
                src="./src/svgs/pp.jpeg"
                className="rounded-full ml-1 h-9 w-9 object-contain"
              />
              <div className="ml-2 text-android-whatsapp-highlight">
                <h2 className="font-semibold"> Umesh Ojha </h2>
                <h3 className="text-xs"> Online </h3>
              </div>
            </div>
            <div className="flex">
              <img
                className="ml-2 w-5 shadow-sm object-contain"
                src="./src/svgs/video.svg"
              />
              <img
                className="ml-5 w-5 shadow-sm object-contain"
                src="./src/svgs/call.svg"
              />
              <img
                className="ml-2 w-5 shadow-sm object-contain"
                src="./src/svgs/more-vertical.svg"
              />
            </div>
          </nav>

          <section className="flex my-2 w-full justify-center">
            <div className="px-2 shadow-sm text-android-whatsapp-label-text p-1 rounded-md text-xs bg-android-whatsapp-label">
              TODAY
            </div>
          </section>
          <section className="flex-grow px-5">
            <section className="flex my-2 w-full">
              <div
                style={{
                  width: "auto",
                  maxWidth: "80%",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                }}
                className="break-all items-start  flex relative shadow-sm text-sm text-black rounded-md bg-white"
              >
                <p className="p-2">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus optio dolorum, enim quia voluptatem voluptas eum
                  commodi porro, inventore voluptatum tempora quibusdam
                  similique facere laboriosam harum. Libero hic voluptas cum.{" "}
                </p>
                <div className="flex bottom-0  right-1 px-1 absolute">
                  <div
                    style={{ fontSize: "11px" }}
                    className="ml-2 text-android-whatsapp-label-text"
                  >
                    11:30 AM
                  </div>
                  {/* <img src="./src/svgs/blue-tick.svg" className="w-5 ml-1" /> */}
                </div>
                <img
                  src="./src/svgs/whatsapp-msg-receive.svg"
                  className="absolute -left-2 top-0"
                />
              </div>
            </section>
            <section className="flex my-2 w-full justify-end">
              <div
                style={{
                  width: "auto",
                  maxWidth: "80%",
                  paddingRight: "70px",
                  paddingBottom: "10px",
                }}
                className="break-all items-start  flex relative shadow-sm text-sm text-black rounded-md bg-android-whatsapp-chat"
              >
                <p className="p-2"> Achha! </p>
                <div className="flex bottom-0  right-0 px-1 absolute">
                  <div
                    style={{ fontSize: "11px" }}
                    className="ml-2 text-android-whatsapp-label-text"
                  >
                    11:35 AM
                  </div>
                  <img src="./src/svgs/blue-tick.svg" className="w-5 ml-1" />
                </div>
                <img
                  src="./src/svgs/whatsapp-msg-send.svg"
                  className="absolute -right-2 top-0"
                />
              </div>
            </section>
          </section>

          <section className="flex p-1">
            <section className="rounded-3xl bg-white p-2 items-center justify-around shadow-sm flex">
              <img src="./src/svgs/smile.svg" alt="" />

              <input placeholder="Type a message" className="ml-2 w-8/12" />
              <img
                src="./src/svgs/attachment.svg"
                style={{ transform: "scale(-1) rotate(90deg)" }}
                className="w-5 h-5 mx-2 object-contain "
                alt=""
              />
              <img
                src="./src/svgs/instagram.svg"
                style={{ transform: "scale(-1) rotate(90deg)" }}
                className="w-4 mx-2 h-4 object-contain "
                alt=""
              />
            </section>
            <button className="bg-android-whatsapp-primary w-11 flex items-center justify-center ml-1 rounded-full shadow-sm p-1">
              <img className="w-5" src="./src/svgs/mic.svg" />
            </button>
          </section>
        </MessageFrame>
      </section>
      <section className="border border-red-900">Customize area</section>
    </main>
  );
};

export default App;
