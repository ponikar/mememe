import React, { FC } from "react";
import { ChatMessageType } from "../../../../contexts/chat/chat-type";

export const AndroidWhatsappLabel: FC<ChatMessageType> = ({ message }) => {
  return (
    <section className="flex my-2 w-full justify-center">
      <div className="px-2 shadow-sm text-android-whatsapp-label-text p-1 rounded-md text-xs bg-android-whatsapp-label">
        {message}
      </div>
    </section>
  );
};
