import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from ".";
import { Button } from "../button";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <div className="grid w-[20em]">
    <Card>
      <h1 className="text-lg font-bold">Card example</h1>
      <p>Some text of examples</p>
      <hr className="my-3" />
      <Button>Go</Button>
    </Card>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
