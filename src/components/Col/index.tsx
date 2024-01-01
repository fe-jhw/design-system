import { ReactNode } from "react"
import "./Col.css"

type ColProp = {
  style?: any
  children: ReactNode
  span: 12
}

const Col: React.FC<ColProp> = ({ children, style, span }) => {
  return (
    <div className={`col col-${span}`} style={style}>
      {children}
    </div>
  )
}

export default Col
