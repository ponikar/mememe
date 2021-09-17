import React from "react";
import { FlexBox } from "../common/container.component";

export const SelectTheme = () => {
  return (
    <FlexBox className="w-full px-3 mt-5 justify-between bg-ios-dark-second py-2">
      <FlexBox className="items-start justify-start flex-col">
        <h2> Select Theme: </h2>
        <FlexBox className="mt-2">
          <div className="p-2 mx-1 bg-ios-dark-back rounded">
            <img
              className="w-8"
              src="./src/svgs/whatsapp/whatsapp.svg"
              alt=""
            />
          </div>
          <div className="p-2 mx-1 rounded">
            <img className="w-8" src="./src/svgs/ios/imessage.svg" alt="" />
          </div>
        </FlexBox>
      </FlexBox>

      <div>Download button</div>
    </FlexBox>
  );
};
