import React from "react";
import { render } from "@testing-library/react";
import { Input } from ".";

describe("<Input />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Input field={null} type="text" value="foo" onChange={() => jest.fn()} />
    );
    expect(container).toBeInTheDocument();
  });
});
