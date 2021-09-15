import { useCallback, useMemo } from "react";
import { ChatMessageType, createMessageType } from "./chat-type";
import { useChatContext } from "./chat.context";

export const useMessage = () => {
  const {
    state: { messages },
    dispatch,
  } = useChatContext();

  const memoMessages = useMemo(
    () => ({
      ...messages,
    }),
    [messages]
  );
  const addNewMessage = useCallback(
    (payload: createMessageType) => {
      dispatch({ type: "NEW_MESSAGE_ADDED", payload: createMessage(payload) });
    },
    [messages, dispatch]
  );

  return { messages: memoMessages, addNewMessage };
};

const createMessage = (props: createMessageType): ChatMessageType => ({
  id: new Date().getTime(),
  ...props,
});
