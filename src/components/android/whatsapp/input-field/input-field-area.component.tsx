import React from "react";
import { AndroidWhatsappAudioButton } from "./input-field-audio-button.component";
import { AndroidWhatsappTextArea } from "./input-field-text.component";

export const AndroidWhatsappInputField = () => {
  return (
    <section className="flex p-1">
      <AndroidWhatsappTextArea />
      <AndroidWhatsappAudioButton />
    </section>
  );
};
