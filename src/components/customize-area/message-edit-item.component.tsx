import React, { FC } from "react";

export const MessageEditItem: FC = () => {
  return (
    <section className="my-2 p-3 bg-ios-dark-second flex w-full justify-between">
      <div className="flex w-10/12 items-center">
        <p>1.</p>
        <p className="ml-2">ssd</p>
      </div>

      <div className="flex w-2/12 justify-around items-center">
        <img src="./src/svgs/edit.svg" alt="" className="w-5 cursor-pointer" />
        <img className="ml-2 cursor-default" src="./src/svgs/x.svg" alt="" />
      </div>
    </section>
  );
};