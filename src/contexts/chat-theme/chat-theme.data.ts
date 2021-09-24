import { ChatThemeType } from "./chat-theme";

export const CHAT_THEME: ChatThemeType = {
  WHATSAPP: {
    key: "WHATSAPP",
    img_url: "/svgs/whatsapp/whatsapp.svg",
    style: {
      backgroundImage: `url('/imgs/whatsapp_background.jpeg')`,
      backgroundSize: "cover",
    },
  },
  IMESSAGE: {
    key: "IMESSAGE",
    img_url: "/svgs/ios/imessage.svg",
  },
};
