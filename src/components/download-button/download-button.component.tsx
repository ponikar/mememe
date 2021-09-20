import React from "react";
import * as htmlToImage from "html-to-image";

const downloadImage = () => {
  const image = document.querySelector("#chat-preview");

  if (image) {
    htmlToImage
      .toPng(image, {
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
  return <button onClick={downloadImage}>Download button</button>;
};
