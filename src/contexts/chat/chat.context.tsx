import React, { createContext, FC, useContext, useReducer } from "react";
import { ChatContextType, ChatReducerType } from "./chat-type";
import { chatReducer, CHAT_INITIAL_STATE } from "./chat.reducer";

const ChatContext = createContext<ChatContextType>({
  state: CHAT_INITIAL_STATE,
  dispatch: () => {},
});
const { Provider } = ChatContext;
// header

// label

// chats

export const ChatProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("Chat Context is not found!");

  return context;
};
