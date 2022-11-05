import React, { ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps {
  children: ReactNode;
}
export const Button = ({ children }: ButtonProps) => (
  <button className={classNames("p2 px-3")}>{children}</button>
);
