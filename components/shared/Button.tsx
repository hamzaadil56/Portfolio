import React from "react";
import { FC } from "react";

interface Button {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button: FC<Button> = ({ text, className, type }) => {
  return (
    <button
      type={type}
      className={`${className} p-4 hover:text-gray-900 transition-all hover:bg-teal-400 text-teal-400 border-2 border-teal-400 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
