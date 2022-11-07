import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "ui";
import { flags } from "./__fixtures__/groupSearchInputs";

export interface GroupInput {
  name: string;
  label: string;
  type: "input" | "select";
  selected?: boolean;
  editMode?: boolean;
  options?: string[];
  multi?: boolean;
  value?: string | null;
}

export interface GroupSearchProps {
  inputs?: GroupInput[];
  placeholder?: string;
  onSearch: (data: GroupInput[]) => void;
}

export const GroupSearch = ({
  inputs = [],
  placeholder,
  onSearch = () => null,
}: GroupSearchProps) => {
  const listRef = useRef(null);
  const mainSearchInput = useRef<HTMLInputElement>(null);

  const [searchItems, setSearchItems] = useState<GroupInput[]>([]);
  const [showOptions, setshowOptions] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (inputs) {
      setSearchItems(inputs);
    }
  }, [inputs]);

  const getMainSearchInput = (): HTMLInputElement => {
    const mainInput = mainSearchInput?.current as unknown as HTMLInputElement;
    return mainInput;
  };

  const getSearchKey = (index: number): HTMLButtonElement => {
    const list = listRef.current as unknown as HTMLUListElement;
    const buttonElm = list.querySelector<HTMLButtonElement>(
      "[data-searchitem-index='" + index + "']"
    ) as HTMLButtonElement;
    return buttonElm;
  };
  const gotoMainInput = () => {
    getMainSearchInput().value = "";
    getMainSearchInput().focus();
  };

  const updateSearchItems = (name: string, values: Partial<GroupInput>) => {
    setSearchItems((_searchItems) => {
      return _searchItems.map((v) => {
        if (v.name === name) {
          return {
            ...v,
            ...values,
          };
        }
        return v;
      });
    });
  };

  const onSelectFilterItem = (item: GroupInput) => {
    setSearchItems((_searchItems) => {
      return _searchItems.map((v) => {
        if (v.name === item.name) {
          return {
            ...v,
            editMode: true,
            selected: true,
          };
        }
        return v;
      });
    });

    setshowOptions(false);
    gotoMainInput();
  };

  if (inputs.length === 0) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchItems);
      }}
      className="grid grid-cols-[1fr_auto] gap-x-2 "
    >
      <div
        className="min-h-[3.8em] rounded-md border border-gray-400 bg-white p-3"
        id="search-input-wrapper"
        data-testid="search-input-wrapper"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = e.target as HTMLDivElement;
          if (target.id === "search-input-wrapper") {
            getMainSearchInput().focus();
          }
        }}
      >
        {searchItems
          .filter((item) => item.selected)
          .map((item: any) => (
            <label
              data-testid={`search-option-${item.name}`}
              key={item.name}
              className={classNames(
                "mr-1 mb-1 inline-block rounded-full bg-green-500 p-2 px-4 text-sm text-white",
                {
                  "bg-green-700": item.editMode,
                }
              )}
              onClick={() => {
                setSearchItems((_searchItems) => {
                  return _searchItems.map((v) => {
                    if (v.name === item.name) {
                      return {
                        ...v,
                        editMode: true,
                      };
                    }
                    return v;
                  });
                });
              }}
            >
              <>
                <span>{item.label}</span> |{" "}
                <span className="inline-block">
                  {item.editMode ? (
                    <>
                      {item.type === "input" && (
                        <input
                          size={`${item.value}`?.length || 1}
                          type={item.type}
                          name={item.name}
                          data-testid={`input-${item.name}`}
                          className={classNames(
                            "border-0 bg-green-500 focus:outline-none",
                            {
                              "bg-green-700": item.editMode,
                            }
                          )}
                          autoFocus
                          autoComplete="off"
                          onFocus={(e) => {
                            if (item.value) e.target.value = item.value;
                          }}
                          onBlur={(e) => {
                            setSearchItems((_searchItems) => {
                              return _searchItems.map((v) => {
                                if (v.name === item.name) {
                                  return {
                                    ...v,
                                    value: e.target.value,
                                    editMode: false,
                                    selected: e.target.value.trim() !== "",
                                  };
                                }
                                return v;
                              });
                            });
                          }}
                          onChange={(e) => {
                            e.target.size = Math.min(
                              e.target.value.length || 1,
                              15
                            );
                          }}
                          onKeyDown={(e) => {
                            const target = e.target as HTMLInputElement;

                            if (
                              e.key === "Backspace" &&
                              target.value.trim().length === 0
                            ) {
                              updateSearchItems(item.name, {
                                editMode: false,
                                selected: false,
                                value: null,
                              });
                              gotoMainInput();
                            }

                            if (e.key === "Enter") {
                              updateSearchItems(item.name, {
                                editMode: false,
                                selected: target.value.trim() !== "",
                                value: target.value.trim(),
                              });
                              gotoMainInput();
                            }
                          }}
                        />
                      )}
                      {item.type === "select" && (
                        <select
                          size={1}
                          name={item.name}
                          autoFocus
                          className={classNames(
                            "border-0 bg-green-500 focus:outline-none",
                            {
                              "bg-green-700": item.editMode,
                            }
                          )}
                          onChange={(e) => {
                            updateSearchItems(item.name, {
                              value: e.target.value,
                              editMode: false,
                              selected: e.target.value ? true : false,
                            });

                            gotoMainInput();
                          }}
                        >
                          {!item.value && (
                            <option selected>Click or press key ⬇️</option>
                          )}
                          {item.options.map((value: string) => (
                            <option
                              key={"option-" + value}
                              value={value}
                              selected={value === item.value}
                            >
                              {flags[value]}&nbsp;
                              {value}
                            </option>
                          ))}
                        </select>
                      )}
                    </>
                  ) : (
                    item.value || "blank"
                  )}
                  <span
                    className="cursor-pointer pl-2"
                    onClick={() => {
                      updateSearchItems(item.name, {
                        selected: false,
                        value: null,
                      });

                      getMainSearchInput().focus();
                    }}
                  >
                    x
                  </span>
                </span>
              </>
            </label>
          ))}

        <label htmlFor="guide" className="relative">
          <input
            className="p-2 focus:outline-none"
            autoComplete="off"
            placeholder={placeholder || "Search"}
            id="guide"
            data-testid="main-input"
            ref={mainSearchInput}
            onChange={(e) => {
              setSearchInput(e.target.value.toLowerCase());
              if (e.target.value.trim() !== "") {
                setshowOptions(true);
              }
            }}
            onFocus={(e) => {
              if (e.target.value.trim() !== "") {
                setshowOptions(true);
              }
            }}
            onKeyDown={(e) => {
              const target = e.target as HTMLInputElement;
              if (e.key === "Backspace" && target.value.trim() === "") {
                const previousSibling = target.parentElement?.previousSibling;
                if (previousSibling) {
                  (previousSibling as HTMLElement).click();
                }
              }

              if (e.key === "Escape") {
                setshowOptions(false);
                setSearchInput("");
              }

              if (e.key === "ArrowDown" && listRef.current) {
                (listRef.current as HTMLUListElement)
                  .querySelector<HTMLButtonElement>("button")
                  ?.focus();
              }
            }}
          />
          {showOptions && (
            <div className="absolute top-6 left-0 min-w-[10em] border border-gray-400 bg-white p-2">
              <ul ref={listRef}>
                {searchItems
                  .filter((item) => {
                    return (
                      item.label.toLowerCase().includes(searchInput) &&
                      !item.selected
                    );
                  })
                  .map((item, i) => {
                    return (
                      <li key={`list-index-${i}`}>
                        <button
                          type="button"
                          className={classNames(
                            "block w-full text-left text-sm",
                            {
                              "opacity-50":
                                item.selected &&
                                item.label.toLowerCase().includes(searchInput),
                            }
                          )}
                          key={i}
                          data-testid={`searchitem-${i}`}
                          data-searchitem-index={i}
                          onKeyDown={(e) => {
                            if (e.key.match(/Esc/)) {
                              setshowOptions(false);
                              setSearchInput("");
                              getMainSearchInput().focus();
                            }
                            if (listRef.current) {
                              if (e.key === "ArrowDown") {
                                getSearchKey(i + 1).focus();
                              }
                              if (e.key === "ArrowUp") {
                                getSearchKey(i - 1).focus();
                              }

                              if (e.key.match(/Enter|Tab/)) {
                                onSelectFilterItem(item);
                                e.preventDefault();
                              }
                            }
                          }}
                          onClick={() => {
                            onSelectFilterItem(item);
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </label>
      </div>
      <Button
        className="h-[4.8em] self-start"
        type="submit"
        data-testid="search-groupsearch"
        onClick={() => {
          onSearch(searchItems);
        }}
      >
        Search
      </Button>
    </form>
  );
};
