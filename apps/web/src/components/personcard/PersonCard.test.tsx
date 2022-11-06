import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PersonCard } from ".";

describe("<PersonCard />", () => {
  it("renders correctly", () => {
    const onClick = jest.fn();
    render(
      <PersonCard
        onClick={onClick}
        personData={{
          id: "1",
          name: "foo",
          title: "bar",
          avatar: "https://via.placeholder.com/150",
        }}
      />
    );

    fireEvent.click(screen.getByTestId("person-card-1"));
    expect(onClick).toBeCalled();
  });
});
