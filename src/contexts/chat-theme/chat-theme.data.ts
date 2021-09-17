import { ChatThemeType } from "./chat-theme";

export const CHAT_THEME: ChatThemeType = {
  WHATSAPP: {
    key: "WHATSAPP",
    img_url: "./src/svgs/whatsapp/whatsapp.svg",
    style: {
      backgroundImage: `url('./src/svgs/whatsapp-background.svg')`,
      backgroundSize: "cover",
    },
  },
  IMESSAGE: {
    key: "IMESSAGE",
    img_url: "./src/svgs/ios/imessage.svg",
  },
};
