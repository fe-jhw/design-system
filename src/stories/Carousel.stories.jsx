import React from "react"
import Carousel from "../components/Carousel"

export default {
  title: "Carousel",
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Carousel {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: [
    <img
      style={{ objectFit: "contain" }}
      src="https://picsum.photos/id/1/400/500"
    />,
    <img
      style={{ objectFit: "contain" }}
      src="https://picsum.photos/id/20/400/500"
    />,
    <img
      style={{ objectFit: "contain" }}
      src="https://picsum.photos/id/35/400/500"
    />,
    <img
      style={{ objectFit: "contain" }}
      src="https://picsum.photos/id/47/400/500"
    />,
    <img
      style={{ objectFit: "contain" }}
      src="https://picsum.photos/id/54/400/500"
    />,
  ],
  style: { width: "400px", height: "500px" },
}
