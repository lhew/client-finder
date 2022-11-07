import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from ".";
import { Button } from "../button";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const FormTemplate = () => (
  <div className="grid w-[20em] grid-cols-[1fr_auto] gap-2">
    <Input type="text" placeholder="Type something here" />
    <Button>Go</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithForm = FormTemplate.bind({});
