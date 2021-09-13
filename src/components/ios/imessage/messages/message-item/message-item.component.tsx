import React, { FC } from "react";

interface IMessageItemProps {
  sender?: boolean;
  message: string;

  delivered?: boolean;
}

export const IMessageItem: FC<IMessageItemProps> = ({
  sender,
  message,
  delivered,
}) => {
  return (
    <div className={`flex ${sender && "justify-end"}  w-full`}>
      <div
        style={{ maxWidth: "75%", width: "auto" }}
        className={`px-3 break-all ${
          sender ? " bg-ios-primary" : "bg-ios-dark-second"
        } my-1 shadow relative text-sm py-2 w-auto  rounded-3xl `}
      >
        <p style={{ zIndex: 2 }}>{message}</p>
        <img
          className="absolute"
          style={{ bottom: "0px", [sender ? "right" : "left"]: "-3.45px" }}
          src={
            sender
              ? "./src/svgs/ios-message-tail-right.svg"
              : "./src/svgs/ios-message-tail-left.svg"
          }
        />

        {sender && delivered && (
          <p className="text-xs font-semibold absolute right-0 text-ios-highlight-second -bottom-5">
            Delivered
          </p>
        )}
      </div>
    </div>
  );
};
