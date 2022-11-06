import React, { RefObject, useEffect, useRef } from "react";
import { Button, Input } from "ui";
import { Formik, Field } from "formik";
import classNames from "classnames";
import { useRouter } from "next/router";

export interface SearchBlockProps {
  onSearch?: (data: { search: string }) => Promise<void> | void;
  showError?: boolean;
  autofocus?: boolean;
}

export const SearchBlock = ({
  onSearch,
  showError,
  autofocus,
}: SearchBlockProps) => {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>();
  useEffect(() => {
    if (ref.current && autofocus) {
      (ref?.current as HTMLFormElement)
        .querySelector<HTMLInputElement>("[name=search]")
        ?.focus();
    }
  }, [autofocus]);

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={async (values) => {
        if (!onSearch) {
          router.push(`/search?search=${values.search}`);
        } else {
          return await onSearch(values);
        }
      }}
      validate={({ search = "" }) => {
        if (search.trim().length < 3) {
          return {
            search: "Search term must be at least 3 characters long",
          };
        }
      }}
    >
      {({ errors, handleSubmit, dirty }) => (
        <form
          ref={ref as RefObject<HTMLFormElement>}
          data-testid="search-form"
          className="grid w-full grid-cols-[1fr_auto] gap-2"
          onSubmit={handleSubmit}
        >
          <Field
            name="search"
            data-testid="search-input"
            placeholder="Search a person by name, quote, or title"
            autoFocus={autofocus}
            className={classNames("block w-full", {
              "border-red-400": errors.search && dirty,
            })}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              console.log(e.key);
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            component={Input}
          />

          <Button type="submit" className="block">
            Search
          </Button>

          {errors.search && showError && dirty && (
            <small
              data-testid="search-errorlabel"
              className={classNames("text-sm text-red-400")}
            >
              {errors.search}
            </small>
          )}
        </form>
      )}
    </Formik>
  );
};
