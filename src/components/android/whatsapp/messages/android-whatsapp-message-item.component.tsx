import React, { FC, memo } from "react";
import { MessageItemsProps } from "../../../../contexts/chat/chat-type";

export const AndroidWhatsappMessageItem: FC<MessageItemsProps> = memo(
  ({ sender, message = "Edit me!", time, seen, index, from, prevToMe }) => {
    return (
      <section
        className={`flex ${prevToMe ? "mt-1" : "mt-3"} w-full ${
          sender && "justify-end"
        }`}
      >
        <div
          style={{
            width: "auto",
            maxWidth: "80%",
            paddingRight: message.length < 10 ? "65px" : "10px",
            paddingBottom: "10px",
          }}
          className={`items-start  flex relative shadow-sm text-sm text-black rounded-md ${
            sender ? "bg-android-whatsapp-chat" : " bg-white"
          } `}
        >
          <p className="p-2 font-normal"> {message} </p>
          <div className="flex bottom-0  right-0 px-1 absolute">
            <div
              style={{ fontSize: "11px" }}
              className={`ml-2  text-android-whatsapp-label-text ${
                !sender && "mr-1"
              }`}
            >
              {time}
            </div>
            {sender &&
              (seen === "yes" ? (
                <img src="/svgs/blue-tick.svg" className="w-4 ml-1" />
              ) : (
                <img src="/svgs/single-tick.svg" className="w-3 ml-1" />
              ))}
          </div>
          {!prevToMe &&
            (from === "sender" ? (
              <img
                src="/svgs/whatsapp-msg-send.svg"
                className="absolute -right-2 top-0"
              />
            ) : (
              <img
                src="/svgs/whatsapp-msg-receive.svg"
                className="absolute -left-2 top-0"
              />
            ))}
        </div>
      </section>
    );
  }
);
