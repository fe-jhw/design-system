import React from "react"
import Card from "../components/Card"

export default {
  title: "Card",
  component: Card,
  argTypes: {},
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: [<p>나는카드</p>],
  style: { width: "200px", height: "80px" },
}
