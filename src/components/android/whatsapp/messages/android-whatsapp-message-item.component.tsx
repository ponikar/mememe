import React, { FC } from "react";

interface AndroidWhatsappMessageItemProps {
  sender?: boolean;
  message: string;
}
export const AndroidWhatsappMessageItem: FC<AndroidWhatsappMessageItemProps> =
  ({ sender, message = "Edit me!" }) => {
    return (
      <section className={`flex my-2 w-full ${sender && "justify-end"}`}>
        <div
          style={{
            width: "auto",
            maxWidth: "80%",
            paddingRight: message.length < 40 ? "45px" : "10px",
            paddingBottom: "10px",
          }}
          className={`break-all items-start  flex relative shadow-sm text-sm text-black rounded-md ${
            sender ? "bg-android-whatsapp-chat" : " bg-white"
          } `}
        >
          <p className="p-2"> {message} </p>
          <div className="flex bottom-0  right-1 px-1 absolute">
            <div
              style={{ fontSize: "11px" }}
              className="ml-2 text-android-whatsapp-label-text"
            >
              11:30 AM
            </div>
            {sender && (
              <img src="./src/svgs/blue-tick.svg" className="w-5 ml-1" />
            )}
          </div>
          {sender ? (
            <img
              src="./src/svgs/whatsapp-msg-send.svg"
              className="absolute -right-2 top-0"
            />
          ) : (
            <img
              src="./src/svgs/whatsapp-msg-receive.svg"
              className="absolute -left-2 top-0"
            />
          )}
        </div>
      </section>
    );
  };
