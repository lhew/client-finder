import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from ".";

export default {
  title: "Building Blocks/Layout",
  component: Layout,
  argTypes: {
    type: { control: { type: "select", options: ["default", "splash"] } },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout type={args.type} withNavbar={args.withNavbar}>
    <h1>This is a layout example</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt fugit
      modi excepturi ducimus nisi corporis praesentium rerum natus facere animi,
      voluptatibus dolor odio molestiae placeat non enim inventore a itaque.
    </p>
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {};
