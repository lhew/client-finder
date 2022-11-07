import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { GroupSearch } from ".";
import defaultInputs from "./__fixtures__/groupSearchInputs";
describe("<GroupSearch />", () => {
  it("should render null if there is not inputs configured", () => {
    const onSearch = jest.fn();

    render(<GroupSearch inputs={[]} onSearch={() => null} />);

    expect(screen.queryByTestId("group-search")).toBeNull();
  });

  it("should display available options in the search block and set a name based on available options", () => {
    const onSearch = jest.fn();
    render(<GroupSearch inputs={defaultInputs} onSearch={onSearch} />);
    // waitFor(() => )

    //should return 'name' and 'nationality'
    waitFor(() =>
      fireEvent.change(screen.getByTestId("main-input"), {
        target: { value: "na" },
      })
    );

    //navigate to options dropdown
    waitFor(() =>
      fireEvent.keyUp(screen.getByTestId("main-input"), {
        key: "ArrowDown",
      })
    );

    //navigate up to first option
    waitFor(() =>
      fireEvent.keyUp(screen.getByTestId("searchitem-1"), {
        key: "ArrowUp",
      })
    );

    //select first option
    waitFor(() =>
      fireEvent.keyUp(screen.getByTestId("searchitem-0"), {
        key: "Enter",
      })
    );

    //should add a value to the selected option
    waitFor(() =>
      fireEvent.change(screen.getByTestId("input-name"), {
        target: { value: "tay" },
      })
    );

    //pressing enter should confirm the selection
    waitFor(() =>
      fireEvent.keyDown(screen.getByTestId("input-name"), {
        key: "Enter",
      })
    );

    // expect(onSearch).toBeCalled();
    waitFor(() =>
      expect(screen.getByTestId("search-option-name")).toHaveTextContent("tay")
    );
  });

  it("should set focus to main input when clicking the main wrapper", () => {
    render(<GroupSearch inputs={defaultInputs} onSearch={() => null} />);
    fireEvent.click(screen.getByTestId("search-input-wrapper"));

    waitFor(() => expect(screen.getByTestId("main-input")).toHaveFocus());
  });

  it("should select an  element by clicking on the options dropdown", () => {
    render(<GroupSearch inputs={defaultInputs} onSearch={() => null} />);

    waitFor(() =>
      fireEvent.change(screen.getByTestId("main-input"), {
        target: { value: "na" },
      })
    );

    waitFor(() => fireEvent.click(screen.getByTestId("searchitem-0")));

    waitFor(() =>
      expect(screen.getByTestId("search-option-name")).toBeInTheDocument()
    );
  });

  it("should trigger submit when pressing enter", () => {
    const onSearch = jest.fn();
    render(<GroupSearch inputs={defaultInputs} onSearch={onSearch} />);
    waitFor(() => fireEvent.submit(screen.getByTestId("groupsearch-form")));
    waitFor(() => expect(onSearch).toBeCalled());
  });

  it("should trigger submit when pressing enter", () => {
    const onSearch = jest.fn();
    render(<GroupSearch inputs={defaultInputs} onSearch={onSearch} />);
    waitFor(() => fireEvent.submit(screen.getByTestId("groupsearch-form")));
    waitFor(() => expect(onSearch).toBeCalled());
  });

  it("should switch label to edit mode when clicked", () => {
    render(<GroupSearch inputs={defaultInputs} onSearch={() => null} />);

    waitFor(() =>
      fireEvent.change(screen.getByTestId("main-input"), {
        target: { value: "na" },
      })
    );

    waitFor(() => fireEvent.click(screen.getByTestId("searchitem-0")));

    waitFor(() =>
      fireEvent.change(screen.getByTestId("input-name"), {
        target: { value: "tay" },
      })
    );

    waitFor(() =>
      fireEvent.keyUp(screen.getByTestId("input-name"), {
        key: "Enter",
      })
    );

    //and now the click to show the edit mode

    waitFor(() => fireEvent.click(screen.getByTestId("input-name")));

    expect(screen.getByTestId("input-name")).toHaveFocus();
  });

  it("should focus on previous item if backspace is pressed", () => {
    const modifiedInputs = [...defaultInputs];

    modifiedInputs[0].value = "tay";
    // modifiedInputs[0].editMode = true;
    modifiedInputs[0].selected = true;

    render(<GroupSearch inputs={modifiedInputs} onSearch={() => null} />);

    waitFor(() =>
      fireEvent.keyDown(screen.getByTestId("main-input"), {
        key: "Backspace",
      })
    );

    expect(screen.getByTestId("input-name")).toHaveFocus();
  });
});
