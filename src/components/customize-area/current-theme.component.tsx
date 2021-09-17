import React, { FC } from "react";
import { useChatTheme } from "../../contexts/chat-theme/chat-theme.context";
import { AndroidWhatsappTheme } from "../android/whatsapp/android-whatsapp-theme.component";
import { IMessageTheme } from "../ios/imessage/imessage-theme.component";

export const CurrentTheme: FC = () => {
  const { theme } = useChatTheme();
  switch (theme.key) {
    case "WHATSAPP":
      return <AndroidWhatsappTheme />;
    case "IMESSAGE":
      return <IMessageTheme />;
    default:
      throw new Error("UNEXPECTED KEY OF THEME");
  }
};
