import React, { FC } from "react";

interface ContainerProps {
  title?: string;
}

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return <h3 className="text-lg"> {title} </h3>;
};

export const SectionContainer: FC<ContainerProps> = ({ title, children }) => {
  return (
    <section className="border-b border-ios-border pb-5 p-3">
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export const FlexBox: FC<{ className?: string }> = ({
  className = "",
  children,
}) => {
  return (
    <section className={`${className} flex justify-center items-center`}>
      {children}
    </section>
  );
};
