import React, { FC, HTMLAttributes } from "react";

interface ButtonProps {
  title: string;
}

export const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  title,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} p-2 text-xs bg-ios-primary rounded-sm`}
    >
      {title}
    </button>
  );
};

export default Button;
