import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ClientCard } from ".";

describe("<ClientCard />", () => {
  it("renders correctly", () => {
    const onClick = jest.fn();
    render(
      <ClientCard
        onClick={onClick}
        clientData={{
          id: "1",
          name: "foo",
          title: "bar",
          avatar: "https://via.placeholder.com/150",
        }}
      />
    );

    fireEvent.click(screen.getByTestId("client-card-1"));
    expect(onClick).toBeCalled();
  });
});
