import React from "react";
import { useHeader } from "../../../../contexts/chat/header.hook";

export const IMessageHeader = () => {
  const [{ profileImage, profileName }] = useHeader();
  return (
    <>
      <img src="./src/svgs/ios-network.svg" className="w-11/12 mx-auto my-2" />
      <nav className="items-start justify-between flex border-b border-ios-border px-1 py-3">
        <div className="flex mt-2 items-center">
          <img src="./src/svgs/ios-back.svg" className="w-5 h-5" />
          <h5 className="rounded-full w-4 h-4 text-xs relative -left-1 flex justify-center items-center  bg-ios-highlight">
            2
          </h5>
        </div>

        {/* profile */}
        <div className="relative -left-5">
          <img
            src={profileImage}
            className="bg-ios-border rounded-full h-10 w-10 object-cover"
          />
          <div className="flex justify-center items-center mt-1">
            <div className="text-xs text-center">{profileName}</div>
            <img
              className="ml-1"
              style={{ width: "6px" }}
              src="./src/svgs/ios-small-right.svg"
            />
          </div>
        </div>

        <div />
      </nav>
    </>
  );
};
