import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PersonCard } from ".";

export default {
  title: "Building Blocks/PersonCard",
  component: PersonCard,
  args: {
    personData: {
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
      name: "John Doe",
      title: "CEO",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args) => (
  <PersonCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
