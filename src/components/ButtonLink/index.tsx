import React, { ReactNode } from "react";

interface ButtonProps {
  className: string;
  href: string;
  children: ReactNode;
}

const ButtonLink = ({ className = "", href = "/", children }: ButtonProps) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default ButtonLink;
