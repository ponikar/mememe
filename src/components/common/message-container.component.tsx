import React, { FC } from "react";

export const MessageContainer: FC<{ className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <section
      style={{ maxHeight: "100%" }}
      className={`${className} flex-grow overflow-auto px-4`}
    >
      {children}
    </section>
  );
};
