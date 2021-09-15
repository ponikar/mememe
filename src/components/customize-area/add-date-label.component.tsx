import React, { FC } from "react";
import Button from "../common/button.component";
import { SectionContainer } from "../common/container.component";
import { Input } from "../common/input.component";

export const AddDateLabel: FC = () => {
  return (
    <SectionContainer title="Date Label">
      <div className="flex items-center">
        <Input className="w-1/2" placeholder="3rd Jan or Today" />
        <Button className="w-2/12" title="Add" />
      </div>
    </SectionContainer>
  );
};
