import React, { FC, memo } from "react";

export interface BackDropProps {
  onBackPress: () => void;
}

export const BackDrop: FC<BackDropProps> = memo(({ children, onBackPress }) => {
  return (
    <div
      onClick={onBackPress}
      className="fixed left-0 top-0  w-full h-screen"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      {children}
    </div>
  );
});
