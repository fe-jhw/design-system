import React, { ReactNode } from "react"
import "./Typography.css"

type LinkProp = {
  style?: any
  children: ReactNode
  type?: "secondary"
}

const Typography: React.FC<{
  style?: any
  children: ReactNode
}> & { Link: React.FC<LinkProp> } = ({ style, children }) => {
  return (
    <span style={style} className={`typography`}>
      {children}
    </span>
  )
}

const Link: React.FC<LinkProp> = ({ style, type, children }) => {
  return (
    <span
      style={style}
      className={
        `typography-link` +
        (type === "secondary" ? " typography-secondary" : "")
      }
    >
      {children}
    </span>
  )
}

Typography.Link = Link

export default Typography
