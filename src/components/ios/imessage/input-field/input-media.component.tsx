import React from "react";

export const IMessageInputMedia = () => {
  return (
    <div className="flex items-center justify-around w-full">
      <img
        src="./src/svgs/ios-camera.svg"
        className="w-7 h-7 mr-2 object-contain"
      />

      <img src="./src/svgs/ios-app-store.svg" className="w-8 h-8 mr-3 mt-1" />
    </div>
  );
};
