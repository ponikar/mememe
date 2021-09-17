import { useCallback, useMemo } from "react";
import {
  ActionPayloadType,
  ChatMessageType,
  createMessageType,
} from "./chat-type";
import { useChatContext } from "./chat.context";

export const useMessage = () => {
  const {
    state: { messages, messageID },
    dispatch,
  } = useChatContext();

  const memoMessages = useMemo(
    () => ({
      messages: Object.entries(messages).map((msg) => msg[1]),
    }),
    [messages]
  );

  const getMessage = useCallback(
    (id: ChatMessageType["id"]) => ({
      ...messages[id],
    }),
    [messages]
  );

  const memoMessageID = useMemo(
    () => ({
      messageID,
    }),
    [messageID]
  );
  const addNewMessage = useCallback(
    (payload: createMessageType) => {
      dispatch({ type: "NEW_MESSAGE_ADDED", payload: createMessage(payload) });
    },
    [messages, dispatch]
  );

  const deleteMessage = useCallback(
    (payload: ActionPayloadType["MESSAGE_DELETED"]) => {
      dispatch({ type: "MESSAGE_DELETED", payload });
    },
    [messages, dispatch]
  );

  const updateMessage = useCallback(
    (payload: ActionPayloadType["MESSAGE_UPDATED"]) => {
      dispatch({ type: "MESSAGE_UPDATED", payload });
    },
    [messages, dispatch]
  );

  const setMessageID = useCallback(
    (payload: ActionPayloadType["SET_MESSAGE_ID"]) => {
      dispatch({ type: "SET_MESSAGE_ID", payload });
    },
    [messages, dispatch]
  );

  return {
    messages: memoMessages.messages,
    messageID: memoMessageID.messageID,
    addNewMessage,
    deleteMessage,
    updateMessage,
    setMessageID,
    getMessage,
  };
};

const createMessage = (props: createMessageType): ChatMessageType => ({
  id: new Date().getTime(),
  ...props,
});
