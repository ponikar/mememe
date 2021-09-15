import React, { FC } from "react";
import { ChatMessageType } from "../../../../contexts/chat/chat-type";
import { useMessage } from "../../../../contexts/chat/message.hook";

interface AndroidWhatsappMessageItemProps extends ChatMessageType {
  sender?: boolean;
}
export const AndroidWhatsappMessageItem: FC<AndroidWhatsappMessageItemProps> =
  ({ sender, message = "Edit me!", time, seen, id, from }) => {
    const { messages } = useMessage();
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
          <div className="flex bottom-0  right-0 px-1 absolute">
            <div
              style={{ fontSize: "11px" }}
              className="ml-2 text-android-whatsapp-label-text"
            >
              {time}
            </div>
            {sender && seen === "yes" && (
              <img src="./src/svgs/blue-tick.svg" className="w-4 ml-1" />
            )}
          </div>
          {messages[id + 1] && from === messages[id + 1].from ? (
            sender ? (
              <img
                src="./src/svgs/whatsapp-msg-send.svg"
                className="absolute -right-2 top-0"
              />
            ) : (
              <img
                src="./src/svgs/whatsapp-msg-receive.svg"
                className="absolute -left-2 top-0"
              />
            )
          ) : null}
        </div>
      </section>
    );
  };
