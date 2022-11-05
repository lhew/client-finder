import React from "react";
import { Button } from "ui";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button onClick={() => console.log("docs button clicked")}>Hello</Button>
    </div>
  );
}
