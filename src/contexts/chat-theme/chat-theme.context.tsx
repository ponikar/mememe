import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const CHAT_THEME = {
  WHATSAPP: 1,
  IMESSAGE: 2,
};

type StateType = typeof CHAT_THEME;

const ChatThemeContext = createContext<{
  theme: StateType["WHATSAPP"];
  setTheme: (theme: keyof StateType) => void;
} | null>(null);

export const ChatThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<StateType["WHATSAPP"]>(1);

  const memoizedValue = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  const setCurrentTheme = useCallback(
    (theme: keyof StateType) => {
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
