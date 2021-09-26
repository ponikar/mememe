import React, { FC } from "react";
import { MessageItemsProps } from "../../../../../contexts/chat/chat-type";

export const IMessageItem: FC<MessageItemsProps> = ({
  message,
  from,
  seen,
  prevToMe,
  img_url,
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
        className={` ${
          sender ? " bg-ios-primary" : "bg-ios-dark-second"
        } shadow relative text-sm  w-auto  rounded-2xl `}
      >
        {img_url && (
          <img src={img_url} className="rounded-2xl w-full object-contain" />
        )}

        {!img_url && (
          <div className="text-sm px-3 py-2" style={{ zIndex: 1000 }}>
            {message}
          </div>
        )}
        {!prevToMe && !img_url && (
          <img
            className="absolute"
            style={{
              bottom: "0.5px",
              [sender ? "right" : "left"]: "-5.3px",
              zIndex: 0,
            }}
            src={
              sender
                ? "/svgs/ios-message-tail-right.svg"
                : "/svgs/ios-message-tail-left.svg"
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
