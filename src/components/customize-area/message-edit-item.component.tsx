import React, { FC, memo } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { ChatMessageType } from "../../contexts/chat/chat-type";
import { useMessage } from "../../contexts/chat/message.hook";

export const MessageEditItem: FC<
  ChatMessageType & { index: number; provided: DraggableProvided }
> = memo(({ message, type, index, id, provided }) => {
  const { deleteMessage, setMessageID } = useMessage();
  return (
    <section
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      className="my-2 p-3 bg-ios-dark-second flex w-full justify-between"
    >
      <div className="flex w-10/12 items-center">
        <img src="/svgs/drag.svg" className="mr-2" />
        <p className="text-sm"> {index + 1} </p>
        <p className="ml-2 text-sm"> {message} </p>
      </div>

      <div className="flex w-2/12 justify-around items-center">
        <img
          onClick={(_) => setMessageID(id)}
          src="/svgs/edit.svg"
          alt=""
          className="cursor-pointer p-1"
        />
        <img
          onClick={(_) => deleteMessage(id)}
          className="p-1 cursor-pointer"
          src="/svgs/x.svg"
          alt=""
        />
      </div>
    </section>
  );
});
