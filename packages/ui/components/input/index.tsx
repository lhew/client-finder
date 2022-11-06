import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

export const Input = (
  props: InputHTMLAttributes<HTMLInputElement> & { field: any }
) => {
  const { field } = props;
  return (
    <input
      {...props}
      {...field}
      className={classNames(
        "rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
        props.className
      )}
    />
  );
};
