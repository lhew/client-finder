import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupSearch } from ".";

export default {
  title: "Building Blocks/GroupSearch",
  component: GroupSearch,
  argTypes: { onSearch: { action: "onSearch triggered" } },
} as ComponentMeta<typeof GroupSearch>;

const Template: ComponentStory<typeof GroupSearch> = (args) => (
  <GroupSearch {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {};
