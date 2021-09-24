import React, { useCallback } from "react";
import { useMessage } from "../../contexts/chat/message.hook";
import { SectionContainer } from "../common/container.component";
import { MessageEditItem } from "./message-edit-item.component";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
export const MessageEditCollection = () => {
  const { messages, setMessages } = useMessage();

  const reorderMessages = useCallback(
    (result: DropResult) => {
      if (result.destination) {
        const copiedMessages = messages;
        const [reorderedItem] = copiedMessages.splice(result.source.index, 1);
        copiedMessages.splice(result.destination.index, 0, reorderedItem);
        setMessages(copiedMessages);
      }
    },
    [messages]
  );

  return (
    <SectionContainer title="Messages">
      <DragDropContext onDragEnd={reorderMessages}>
        <Droppable droppableId="messages">
          {(provider) => (
            <div
              {...provider.droppableProps}
              ref={provider.innerRef}
              className="h-72 messages border border-ios-border px-2 max-h-72 overflow-auto"
            >
              {messages.map((msg, index) => (
                <MessageEditItem key={msg.id} {...msg} index={index} />
              ))}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </SectionContainer>
  );
};
