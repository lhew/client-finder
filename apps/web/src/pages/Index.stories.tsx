import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from ".";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: { onSearch: { action: "onSearch triggered" } },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Primary = Template.bind({});
Primary.args = {};
