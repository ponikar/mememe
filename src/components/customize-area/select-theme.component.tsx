import React from "react";
import { useChatTheme } from "../../contexts/chat-theme/chat-theme.context";
import { CHAT_THEME } from "../../contexts/chat-theme/chat-theme.data";
import { FlexBox } from "../common/container.component";

export const SelectTheme = () => {
  const { setTheme, theme } = useChatTheme();
  return (
    <FlexBox className="w-full px-3 mt-5 justify-between bg-ios-dark-second py-2">
      <FlexBox className="items-start justify-start flex-col">
        <h2> Select Theme: </h2>
        <FlexBox className="mt-2">
          {Object.entries(CHAT_THEME).map(([indexKey, { img_url, key }]) => {
            return (
              <button
                onClick={(_) => setTheme(key)}
                key={key}
                className={`p-2 mx-1 ${
                  theme.key == key && "bg-ios-dark-back"
                } rounded`}
              >
                <img className="w-8" src={img_url} alt="" />
              </button>
            );
          })}
        </FlexBox>
      </FlexBox>

      <div>Download button</div>
    </FlexBox>
  );
};
