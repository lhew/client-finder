import React from "react";
import { render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toBeInTheDocument();
  });

  it("presents button without children", () => {
    const { container } = render(<Button value="some value" />);
    expect(container).toBeInTheDocument();
  });
});
