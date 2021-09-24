import React, { FC, memo } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { ChatMessageType } from "../../contexts/chat/chat-type";
import { useMessage } from "../../contexts/chat/message.hook";

export const MessageEditItem: FC<ChatMessageType & { index: number }> = memo(
  ({ message, type, index, id }) => {
    const { deleteMessage, setMessageID } = useMessage();
    return (
      <Draggable
        shouldRespectForcePress={true}
        index={index}
        draggableId={id.toString()}
      >
        {(provider) => (
          <section
            ref={provider.innerRef}
            {...provider.dragHandleProps}
            {...provider.draggableProps}
            className="my-2 px-3 bg-ios-dark-second flex w-full justify-between"
          >
            <div className="flex w-10/12 items-center">
              <img src="/svgs/drag.svg" className="mr-2" />
              <p className="text-sm"> {index + 1} </p>
              <p className="ml-2 text-sm"> {message} </p>
            </div>

            <div className="flex w-3/12 justify-around items-center">
              <img
                onClick={(_) => {
                  console.log("WORKING");
                  setMessageID(id);
                }}
                src="/svgs/edit.svg"
                alt=""
                className="cursor-pointer border p-3"
              />
              <img
                onClick={(_) => deleteMessage(id)}
                className="p-3 cursor-pointer"
                src="/svgs/x.svg"
                alt=""
              />
            </div>
          </section>
        )}
      </Draggable>
    );
  }
);
