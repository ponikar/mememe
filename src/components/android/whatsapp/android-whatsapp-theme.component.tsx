import React from "react";
import { AndroidWhatsappHeader } from "./header/android-whatsapp-header.component";
import { AndroidWhatsappInputField } from "./input-field/input-field-area.component";
import { AndroidWhatsappLabel } from "./label/android-whatsapp-label.component";
import { AndroidWhatsappMessageCollection } from "./messages/android-whatsapp-message-collection.component";
import { AndroidWhatsappMessageItem } from "./messages/android-whatsapp-message-item.component";

export const AndroidWhatsappTheme = () => {
  return (
    <>
      <AndroidWhatsappHeader />
      <AndroidWhatsappMessageCollection />
      <AndroidWhatsappInputField />
    </>
  );
};
