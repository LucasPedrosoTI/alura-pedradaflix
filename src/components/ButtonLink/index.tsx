import React, { ReactNode } from 'react';

interface ButtonProps {
  className: string;
  children: ReactNode;
}

const ButtonLink = ({ className = '', children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default ButtonLink;
