import { ChatThemeType } from "./chat-theme";

export const CHAT_THEME: ChatThemeType = {
  WHATSAPP: {
    key: "WHATSAPP",
    img_url: "/svgs/whatsapp/whatsapp.svg",
    style: {
      backgroundImage: `url('/svgs/whatsapp-background.svg')`,
      backgroundSize: "cover",
    },
  },
  IMESSAGE: {
    key: "IMESSAGE",
    img_url: "/svgs/ios/imessage.svg",
  },
};
