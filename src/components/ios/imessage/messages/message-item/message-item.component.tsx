import React, { FC } from "react";
import { MessageItemsProps } from "../../../../../contexts/chat/chat-type";

export const IMessageItem: FC<MessageItemsProps> = ({
  message,
  from,
  seen,
  prevToMe,
}) => {
  const sender = from === "sender";
  const showDelivered = !prevToMe && sender && seen;
  return (
    <div
      className={`flex ${showDelivered && "mb-5"} ${
        sender && "justify-end"
      }  w-full`}
    >
      <div
        style={{
          maxWidth: "75%",
          width: "auto",
          margin: `${!prevToMe ? "5px" : "1.5px"} 0px`,
        }}
        className={`px-3 ${
          sender ? " bg-ios-primary" : "bg-ios-dark-second"
        } shadow relative text-sm py-2 w-auto  rounded-2xl `}
      >
        <div className="text-sm" style={{ zIndex: 1000 }}>
          {message}
        </div>
        {!prevToMe && (
          <img
            className="absolute"
            style={{
              bottom: "0.5px",
              [sender ? "right" : "left"]: "-5.3px",
              zIndex: 0,
            }}
            src={
              sender
                ? "./src/svgs/ios-message-tail-right.svg"
                : "./src/svgs/ios-message-tail-left.svg"
            }
          />
        )}

        {showDelivered && (
          <p className="text-xs font-semibold absolute right-0 text-ios-highlight-second -bottom-5">
            Delivered
          </p>
        )}
      </div>
    </div>
  );
};
