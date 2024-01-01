import { ReactNode } from "react"
import "./Divider.css"

const Divider: React.FC<{
  type?: "horizontal" | "vertical"
  style?: any
}> = ({ type, style }) => {
  return (
    <div
      style={style}
      className={
        `divider` +
        (type === "vertical" ? " divider-vertical" : " divider-horizontal")
      }
    />
  )
}

export default Divider
