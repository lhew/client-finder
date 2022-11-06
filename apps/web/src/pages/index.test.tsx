import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Home from ".";

describe("Home", () => {
  it("initial test - should display the home page", () => {
    console.log = jest.fn();

    render(<Home />);
    fireEvent.click(screen.getByLabelText("Hello"));
  });
});
