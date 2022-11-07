import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClientCard } from ".";

export default {
  title: "Building Blocks/ClientCard",
  component: ClientCard,
  args: {
    clientData: {
      id: "1",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
      name: "John Doe",
      title: "CEO",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
} as ComponentMeta<typeof ClientCard>;

const Template: ComponentStory<typeof ClientCard> = (args) => (
  <ClientCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
