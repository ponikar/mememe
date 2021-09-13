import React, { FC } from "react";

interface MessageFrameInterface {
  className?: string;
}

const MessageFrame: FC<MessageFrameInterface> = ({ className, children }) => {
  return (
    <div
      style={{ height: "700px", width: "350px" }}
      className={`${
        className && className
      } bg-ios-dark-back flex flex-col justify-start `}
    >
      {children}
    </div>
  );
};

export default MessageFrame;
