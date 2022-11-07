import { GroupInput } from "..";
export const flags: { [key: string]: string } = {
  "New Zealand": "🇳🇿",
  Brazil: "🇧🇷",
  Ireland: "🇮🇪",
  India: "🇮🇳",
  "The Netherlands": "🇳🇱",
  Germany: "🇩🇪",
  France: "🇫🇷",
  "United States": "🇺🇸",
  Spain: "🇪🇸",
  Italy: "🇮🇹",
  "United Kingdom": "🇬🇧",
  Argentina: "🇦🇷",
};

const inputs: GroupInput[] = [
  {
    label: "Name",
    name: "name",
    type: "input",
    editMode: false,
    selected: false,
  },
  {
    label: "Title",
    name: "title",
    type: "input",
    editMode: false,
    selected: false,
  },
  {
    label: "Quote",
    name: "quote",
    type: "input",
    editMode: false,
    selected: false,
  },
  {
    label: "Nationality",
    name: "nationality",
    type: "select",
    editMode: false,
    selected: false,
    multi: true,
    options: Object.keys(flags),
  },
];

export default inputs;
