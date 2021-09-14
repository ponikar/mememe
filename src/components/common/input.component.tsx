import React, { FC, HTMLAttributes } from "react";

interface InputProps {
  label?: string;
  htmlFor?: string;
}

const INPUT_CLASSNAME =
  "border flex-grow px-3 py-2 bg-ios-dark-second border-none rounded";

const InputContainer: FC = ({ children }) => {
  return (
    <section className="text-ios-text mr-1 flex-grow my-2 text-sm flex flex-col">
      {children}
    </section>
  );
};

export const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  children,
  label,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <label htmlFor="name"> {label} </label>}
      <div className="flex">
        <input {...props} className={`${INPUT_CLASSNAME}`} />
        {children}
      </div>
    </InputContainer>
  );
};

export const TextArea: FC<InputProps & HTMLAttributes<HTMLTextAreaElement>> = ({
  children,
  label,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <label htmlFor="name"> {label} </label>}
      <div className="flex">
        <textarea {...props} className={`${INPUT_CLASSNAME}`} />
        {children}
      </div>
    </InputContainer>
  );
};

export const Select: FC<InputProps & HTMLAttributes<HTMLSelectElement>> = ({
  label,
  children,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <label htmlFor="name"> {label} </label>}
      <div className="flex">
        <select {...props} className={`${INPUT_CLASSNAME}`}>
          {children}
        </select>
      </div>
    </InputContainer>
  );
};
