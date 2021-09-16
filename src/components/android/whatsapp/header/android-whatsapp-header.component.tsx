import React from "react";
import { useHeader } from "../../../../contexts/chat/header.hook";

export const AndroidWhatsappHeader = () => {
  const [{ profileName, activity_status, profileImage }] = useHeader();
  return (
    <nav className="p-2 flex bg-android-whatsapp-primary shadow-md justify-between">
      <div className="flex items-center">
        <img src="./src/svgs/arrow-left.svg" />
        <img
          src={profileImage}
          className="rounded-full ml-1 h-9 w-9 object-cover"
        />
        <div className="ml-2 text-android-whatsapp-highlight">
          <h2 className="font-semibold"> {profileName} </h2>
          <h3 className="text-xs"> {activity_status} </h3>
        </div>
      </div>
      <div className="flex">
        <img
          className="ml-2 w-5 shadow-sm object-contain"
          src="./src/svgs/video.svg"
        />
        <img
          className="ml-5 w-5 shadow-sm object-contain"
          src="./src/svgs/call.svg"
        />
        <img
          className="ml-2 w-5 shadow-sm object-contain"
          src="./src/svgs/more-vertical.svg"
        />
      </div>
    </nav>
  );
};
