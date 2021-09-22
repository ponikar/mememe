import React, { FC } from "react";
import { MesssagePreview } from "./components/chat-preview/chat-preview.component";
import { CustomizeArea } from "./components/customize-area/customize-area.component";
import { ChatThemeProvider } from "./contexts/chat-theme/chat-theme.context";
import { ChatProvider } from "./contexts/chat/chat.context";

const App: FC = () => {
  return (
    <main className="xl:w-9/12 md:w-full sm:w-10/12 w-full text-ios-text mx-auto grid lg:grid-cols-3 grid-cols-1">
      <ChatThemeProvider>
        <ChatProvider>
          <MesssagePreview />
          <CustomizeArea />
        </ChatProvider>
      </ChatThemeProvider>
    </main>
  );
};

export default App;
