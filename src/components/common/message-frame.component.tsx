import React, { CSSProperties, FC } from "react";

interface MessageFrameInterface {
  className?: string;
  style?: CSSProperties;
}

export const MessageFrame: FC<MessageFrameInterface> = ({
  className,
  children,
  style = {},
}) => {
  return (
    <div
      style={{ height: "700px", width: "350px", ...style }}
      id="chat-preview"
      className={`${
        className && className
      } bg-ios-dark-back flex flex-col justify-start `}
    >
      {children}
    </div>
  );
};
