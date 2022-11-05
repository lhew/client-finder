import React from "react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} className={classNames("p2 bg-red-500 px-3 text-white")}>
    {children}
  </button>
);
