import { ReactNode } from "react"
import "./Timeline.css"

type TimelineProp = {
  items: string[]
}

type TimelineItemProp = {
  children: ReactNode
  last: boolean
}

const Timeline: React.FC<TimelineProp> = ({ items }) => {
  return (
    <ul className="timeline">
      {items.map((item, idx) => (
        <Item key={idx} last={idx === items.length - 1}>
          {item}
        </Item>
      ))}
    </ul>
  )
}

const Item: React.FC<TimelineItemProp> = ({ children, last }) => {
  return (
    <li className={"timeline-item" + (last ? "timeline-item-last" : "")}>
      <div className="timeline-item-tail"></div>
      <div className="timeline-item-head timeline-item-head-blue"></div>
      <div className="timeline-item-content">{children}</div>
    </li>
  )
}

export default Timeline
