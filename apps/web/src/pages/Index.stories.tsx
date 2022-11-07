import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Home from ".";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: { onSearch: { action: "onSearch triggered" } },
} as ComponentMeta<typeof Home>;

const client = new QueryClient();
const Template: ComponentStory<typeof Home> = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <Home />
        <p className="fixed top-2 z-10 w-full text-center text-sm text-orange-400">
          Remember running the api app to avoid XHR errors
        </p>
      </QueryClientProvider>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
