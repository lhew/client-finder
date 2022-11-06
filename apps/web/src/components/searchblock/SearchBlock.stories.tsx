import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchBlock } from ".";

export default {
  title: "Building Blocks/SearchBlock",
  component: SearchBlock,
  argTypes: { onSearch: { action: "onSearch triggered" } },
} as ComponentMeta<typeof SearchBlock>;

const Template: ComponentStory<typeof SearchBlock> = (args) => (
  <SearchBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
