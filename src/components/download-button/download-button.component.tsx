import React from "react";
import * as htmlToImage from "html-to-image";

const downloadImage = () => {
  const image = document.querySelector("#chat-preview");

  if (image) {
    htmlToImage
      .toPng(image as HTMLElement, {
        quality: 0.6,
      })
      .then((dataUrl) => {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "lol.png";
        a.click();
      });
  }
};
export const DownloadButton = () => {
  return (
    <button className="p-2 rounded-full bg-ios-primary" onClick={downloadImage}>
      <img src="./src/svgs/download.svg" className="stroke-current" alt="" />
    </button>
  );
};
