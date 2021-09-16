import { ChatMessageType } from "../contexts/chat/chat-type";

export const isFromSame = (messages: ChatMessageType[], index: number) => {
  return (
    messages[index - 1] && messages[index - 1].from === messages[index].from
  );
};

export const isFromIOSSame = (messages: ChatMessageType[], index: number) => {
  return (
    messages[index + 1] && messages[index + 1].from === messages[index].from
  );
};
