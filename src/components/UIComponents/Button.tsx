import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-lg bg-green-600 w-20 rounded-md font-medium text-white hover:bg-green-700">
      {children}
    </button>
  );
};

export default Button;
