import React, { FC } from "react";

export const IMessageContainer: FC = ({ children }) => {
  return (
    <section className="p-3 flex-grow flex border-ios-border flex-col border-t">
      {children}
    </section>
  );
};
