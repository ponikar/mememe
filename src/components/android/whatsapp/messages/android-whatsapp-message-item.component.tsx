import React, { FC, memo } from "react";
import { WhatappColors } from "../../../../constants/whatsapp-colors";
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
            paddingBottom: "5px",
          }}
          className={`items-start flex-col py-1 flex relative shadow-sm text-sm text-black rounded-md ${
            sender ? "bg-android-whatsapp-chat" : " bg-white"
          } `}
        >
          <h2
            style={{
              color:
                WhatappColors[
                  Math.floor(Math.random() * WhatappColors.length - 1)
                ],
            }}
            className="font-medium px-2 text-sm z-50"
          >
            Darshan Ponikar
          </h2>

          <div className="p-1 z-50">
            <img
              src="https://images.pexels.com/photos/3615180/pexels-photo-3615180.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="rounded w-full object-contain"
            />
          </div>

          <p
            style={{ paddingRight: message.length < 10 ? "65px" : "10px" }}
            className="px-2 pb-3 font-normal text-sm z-50"
          >
            {message}
          </p>
          <div className="flex bottom-0  right-0 px-1 absolute">
            <div
              style={{ fontSize: "10px" }}
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

          {/* Message Tangle  */}
          {!prevToMe &&
            (from === "sender" ? (
              <img
                src="/svgs/whatsapp-msg-send.svg"
                className="absolute -right-2 top-0"
              />
            ) : (
              <img
                src="/svgs/whatsapp-msg-receive.svg"
                className="absolute -left-2 -top-0"
              />
            ))}
        </div>
      </section>
    );
  }
);
