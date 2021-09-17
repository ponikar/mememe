export interface ChatThemeType {
  [key: string]: {
    key: string;
    style?: {};
    img_url: string;
  };
}

export type ThemeType = ChatThemeType[keyof ChatThemeType];
