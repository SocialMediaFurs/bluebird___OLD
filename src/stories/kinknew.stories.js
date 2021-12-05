import Link from "../components/LinkTest";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Component/KinkNew',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  val:
    {
      link: "https://twitter.com/SneakerMaster95",
      img: "logos/twitter.png",
      plattform: "Twitter",
      financialInterest: false
    }
};
Primary.storyName = 'Back Card ändern';
