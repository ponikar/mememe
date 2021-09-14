import React from "react";

export const AndroidWhatsappHeader = () => {
  return (
    <nav className="p-2 flex bg-android-whatsapp-primary shadow-md justify-between">
      <div className="flex items-center">
        <img src="./src/svgs/arrow-left.svg" />
        <img
          src="./src/svgs/pp.jpeg"
          className="rounded-full ml-1 h-9 w-9 object-contain"
        />
        <div className="ml-2 text-android-whatsapp-highlight">
          <h2 className="font-semibold"> Umesh Ojha </h2>
          <h3 className="text-xs"> Online </h3>
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
