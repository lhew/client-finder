import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { SearchBlock } from ".";

describe("<SearchBlock />", () => {
  it("should not submit if trigger search when search text is less than 3 characters", () => {
    const onSearch = jest.fn();

    render(<SearchBlock onSearch={onSearch} />);

    waitFor(() =>
      expect(screen.getByTestId("search-form")).toBeInTheDocument()
    );
    waitFor(() =>
      act(() => {
        fireEvent.change(screen.getByRole("textbox"), {
          target: { value: "fo" },
        });
      })
    );

    waitFor(() => {
      act(() => {
        fireEvent.click(screen.getByText("Search"));
      });
    });
    waitFor(() =>
      expect(screen.getByTestId("search-errorlabel")).toBeInTheDocument()
    );

    expect(onSearch).not.toBeCalled();
  });

  it("should submit if trigger search when search text is more than 3 characters", () => {
    const onSearch = jest.fn();

    render(<SearchBlock onSearch={onSearch} />);

    waitFor(() =>
      expect(screen.getByTestId("search-form")).toBeInTheDocument()
    );
    waitFor(() =>
      act(() => {
        fireEvent.change(screen.getByRole("textbox"), {
          target: { value: "foo" },
        });
      })
    );

    waitFor(() => {
      act(() => {
        fireEvent.click(screen.getByText("Search"));
      });
    });

    waitFor(() => expect(onSearch).toBeCalled());
  });
});
