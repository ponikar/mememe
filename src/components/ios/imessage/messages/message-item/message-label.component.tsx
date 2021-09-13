import React, { FC } from "react";

export const IMessageLabel: FC = ({ children }) => {
  return (
    <div className="flex text-xs flex-col text-ios-highlight-second items-center justify-center w-full">
      {children}
    </div>
  );
};
