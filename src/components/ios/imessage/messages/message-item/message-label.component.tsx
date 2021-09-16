import React, { FC } from "react";

export const IMessageLabel: FC<{ className?: string }> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`${className} flex text-xs flex-col text-ios-highlight-second items-center justify-center w-full`}
    >
      {children}
    </div>
  );
};
