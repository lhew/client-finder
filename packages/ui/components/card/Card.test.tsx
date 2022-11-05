import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("<Card />", () => {
  it("renders correctly", () => {
    render(<Card data-testid="card">This is a card example</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("renders correctly without children", () => {
    render(<Card data-testid="card" />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
