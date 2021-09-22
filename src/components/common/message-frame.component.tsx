import React, { CSSProperties, FC } from "react";

interface MessageFrameInterface {
  className?: string;
  style?: CSSProperties;
}

export const MessageFrame: FC<MessageFrameInterface> = ({
  className = "",
  children,
  style = {},
}) => {
  return (
    <div
      style={{ height: "650px", ...style }}
      id="chat-preview"
      className={`${className} xl:w-5/12 lg:w-6/12  md:w-6/12 w-full  border-ios-dark-second border shadow-lg scroll-area bg-ios-dark-back flex flex-col justify-start `}
    >
      {children}
    </div>
  );
};
