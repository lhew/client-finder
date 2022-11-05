import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from ".";

describe("Docs", () => {
  it("initial test - should display the home page", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Home />);

    fireEvent.click(screen.getByText("Hello"));
    expect(log).toBeCalled();
  });
});
