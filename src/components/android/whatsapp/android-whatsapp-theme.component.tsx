import React from "react";
import { AndroidWhatsappHeader } from "./header/android-whatsapp-header.component";
import { AndroidWhatsappInputField } from "./input-field/input-field-area.component";
import { AndroidWhatsappLabel } from "./label/android-whatsapp-label.component";
import { AndroidWhatsappMessageItem } from "./messages/android-whatsapp-message-item.component";

export const AndroidWhatsappTheme = () => {
  return (
    <>
      <AndroidWhatsappHeader />
      <section className="flex-grow px-5">
        <AndroidWhatsappLabel />
        <AndroidWhatsappMessageItem message="How you doing?" />
        <AndroidWhatsappMessageItem sender message="I am fine!" />
      </section>
      <AndroidWhatsappInputField />
    </>
  );
};
