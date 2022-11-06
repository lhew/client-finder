import React from "react";
import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Home from ".";

describe("Search", () => {
  it("initial test - should display the search results", () => {
    console.log = jest.fn();

    render(<Home />);
    fireEvent.click(screen.getByText("RESULTS"));
  });
});
