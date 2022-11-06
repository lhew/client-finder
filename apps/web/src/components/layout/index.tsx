import React from "react";

import classNames from "classnames";
import { SearchBlock } from "../searchblock";

export interface CardProps {
  children?: React.ReactNode;
}

export interface SearchBlockProps {
  children?: React.ReactNode;
  withNavbar?: boolean;
  type?: "splash" | "default";
}

export const Layout = ({
  type = "default",
  children,
  withNavbar = true,
}: SearchBlockProps) => {
  return (
    <div
      className={classNames({
        "mx-auto grid h-[100vh] grid-rows-[1fr_20em]": type === "splash",
        "min-h-[100vh] w-full": type === "default",
      })}
    >
      {withNavbar && (
        <div
          className={classNames(
            "fixed  top-0 w-full border-b-2 border-gray-400 bg-white"
          )}
        >
          <div className="align-center mx-[auto] grid max-w-5xl grid-cols-[1fr_20em] p-2">
            <h1 className="pt-2.5 font-bold">People Finder</h1>
            <SearchBlock />
          </div>
        </div>
      )}
      <div
        className={classNames(
          "mx-[auto] flex min-h-[100vh] flex-col",
          {
            "max-w-5xl pt-[5em]": type === "default",
          },
          {
            "w-3/5": type === "splash",
          }
        )}
      >
        <div className="flex-1">{children}</div>
        <footer className="p-3 text-center text-xs text-gray-500">
          Made by Leonardo Almeida
        </footer>
      </div>
    </div>
  );
};
