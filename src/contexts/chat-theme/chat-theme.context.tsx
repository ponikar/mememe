import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ChatThemeType, ThemeType } from "./chat-theme";
import { CHAT_THEME } from "./chat-theme.data";

const ChatThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: keyof ChatThemeType) => void;
} | null>(null);

export const ChatThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(CHAT_THEME["WHATSAPP"]);

  const memoizedValue = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  const setCurrentTheme = useCallback(
    (theme: keyof ChatThemeType) => {
      setTheme(CHAT_THEME[theme]);
    },
    [setTheme]
  );

  return (
    <ChatThemeContext.Provider
      value={{ ...memoizedValue, setTheme: setCurrentTheme }}
    >
      {children}
    </ChatThemeContext.Provider>
  );
};

export const useChatTheme = () => {
  const context = useContext(ChatThemeContext);

  if (!context) throw new Error("CHAT CONTEXT NOT FOUND");

  return context;
};
