import React, { FC, memo } from "react";
import { ChatMessageType } from "../../contexts/chat/chat-type";
import { useMessage } from "../../contexts/chat/message.hook";

export const MessageEditItem: FC<ChatMessageType & { index: number }> = memo(
  ({ message, type, index, id }) => {
    const { deleteMessage } = useMessage();
    return (
      <section className="my-2 p-3 bg-ios-dark-second flex w-full justify-between">
        <div className="flex w-10/12 items-center">
          <p className="text-sm"> {index + 1} </p>
          <p className="ml-2 text-sm"> {message} </p>
        </div>

        <div className="flex w-2/12 justify-around items-center">
          <img
            src="./src/svgs/edit.svg"
            alt=""
            className="w-5 cursor-pointer"
          />
          <img
            onClick={(_) => deleteMessage(id)}
            className="ml-2 cursor-pointer"
            src="./src/svgs/x.svg"
            alt=""
          />
        </div>
      </section>
    );
  }
);
