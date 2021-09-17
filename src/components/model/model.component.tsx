import React, { FC } from "react";
import { BackDrop, BackDropProps } from "../backdrop/backdrop.component";

export const Model: FC<BackDropProps> = ({ children, onBackPress }) => {
  return (
    <BackDrop onBackPress={onBackPress}>
      <section
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={(e) => e.stopPropagation()}
        className="fixed bg-ios-dark-back w-4/12 p-3 shadow rounded"
      >
        {children}
      </section>
    </BackDrop>
  );
};
