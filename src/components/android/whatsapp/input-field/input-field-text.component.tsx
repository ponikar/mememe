import React from "react";
import { AndroidWhatsappInputMedia } from "./input-field-media.component";

export const AndroidWhatsappTextArea = () => {
  return (
    <section className="rounded-3xl bg-white p-2 items-center justify-around shadow-sm flex">
      <img src="/svgs/smile.svg" alt="" />
      <input placeholder="Type a message" className="ml-2 w-8/12" />
      <AndroidWhatsappInputMedia />
    </section>
  );
};
