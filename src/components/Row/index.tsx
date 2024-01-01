import { ReactNode } from "react"
import "./Row.css"

type RowProp = {
  style?: any
  children: ReactNode
  gutter?: number
}

const Row: React.FC<RowProp> = ({ children, style }) => {
  return (
    <div className="row" style={style}>
      {children}
    </div>
  )
}

export default Row
