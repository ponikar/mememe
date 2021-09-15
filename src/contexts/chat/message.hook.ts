import { useCallback, useMemo } from "react";
import { ChatMessageType } from "./chat-type";
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
    (payload: ChatMessageType) => {
      dispatch({ type: "NEW_MESSAGE_ADDED", payload: createMessage(payload) });
    },
    [messages, dispatch]
  );

  return { messages: memoMessages, addNewMessage };
};

const createMessage = ({
  type,
  message,
  time,
  from,
  seen,
}: {
  type: ChatMessageType["type"];
  message: string;
  time: string;
  seen: boolean;
  from: ChatMessageType["from"];
}): ChatMessageType => ({
  message,
  id: new Date().getTime(),
  type,
  time,
  from,
  seen,
});
