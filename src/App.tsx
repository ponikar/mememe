import React, { FC } from "react";
import { MesssagePreview } from "./components/chat-preview/chat-preview.component";
import { CustomizeArea } from "./components/customize-area/customize-area.component";
import { ChatThemeProvider } from "./contexts/chat-theme/chat-theme.context";
import { ChatProvider } from "./contexts/chat/chat.context";

const App: FC = () => {
  return (
    <main className="sm:w-10/12 w-full text-ios-text mx-auto border grid sm:grid-cols-3">
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
