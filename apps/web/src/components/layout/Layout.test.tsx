import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Layout } from ".";

describe("<Layout />", () => {
  it("renders correctly in default mode", () => {
    const { container } = render(
      <Layout type="splash" withNavbar={false}>
        layout content - slash screen
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly for standard layout (internal pages ,etc)", () => {
    const { container } = render(
      <Layout>layout content - internal pages </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
