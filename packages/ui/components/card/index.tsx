import React from "react";

export interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => (
  <div
    {...props}
    className="card rounded-lg border border-gray-300  p-2.5 text-sm  shadow-sm transition hover:border-blue-300"
  >
    {children}
  </div>
);
