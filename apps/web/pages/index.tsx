import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>WEB</h1>
      <Button onClick={() => console.log("web button clicked")}>Hello</Button>
    </div>
  );
}
