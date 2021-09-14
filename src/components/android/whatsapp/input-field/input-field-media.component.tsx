import React from "react";

export const AndroidWhatsappInputMedia = () => {
  return (
    <>
      <img
        src="./src/svgs/attachment.svg"
        style={{ transform: "scale(-1) rotate(90deg)" }}
        className="w-5 h-5 mx-2 object-contain "
        alt=""
      />
      <img
        src="./src/svgs/instagram.svg"
        style={{ transform: "scale(-1) rotate(90deg)" }}
        className="w-4 mx-2 h-4 object-contain "
        alt=""
      />
    </>
  );
};
