import Link from "../components/KinkNew";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Component/KinkNew',
  component: Link,
};

const Template = (args) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: '<Link v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  singleDiagram: true,
  slider: false,
  val:
    {
      field: "Sneaker",
      orientation: 5,
      like: 6,
      pro: [
        'lecken',
        'sniffen',
        'vollwixxen'
      ],
      con: [
        'kaputt machen'
      ],
      disable: true,
      experience: true
    }
};
Primary.storyName = 'Back Card ändern';
