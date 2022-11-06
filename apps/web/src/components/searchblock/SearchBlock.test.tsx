import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBlock } from ".";

describe("<Card />", () => {
  it("renders correctly", () => {
    const onSearch = jest.fn();
    const { debug } = render(<SearchBlock onSearch={onSearch} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "foo" },
    });
    fireEvent.click(screen.getByText("Search"));
    debug();
    // expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
