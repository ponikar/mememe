import React from "react";

export const IMessageInput = () => {
  return (
    <div
      style={{ padding: "0px 3px", width: "70%" }}
      className="flex items-center rounded-3xl border-ios-border border bg-ios-dark-back"
    >
      <textarea
        placeholder="iMessage"
        rows={1}
        className="p-1 rounded-2xl px-2 bg-ios-dark-back resize-none text-ios-placeholder placeholder-ios-placeholder"
      ></textarea>
      <div className="bg-ios-icon rounded-full w-8 h-7 flex justify-center items-center">
        <img src="/svgs/ios-mic.png" className="w-5 h-5" />
      </div>
    </div>
  );
};
