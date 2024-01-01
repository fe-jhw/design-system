import { ReactNode } from "react"
import "./Card.css"

const Card: React.FC<{ children: ReactNode; style?: any, bodyStyle?: any }> = ({
  children,
  style,
  bodyStyle
}) => {
  return (
    <div className="card" style={style}>
      <div className="card-body" style={bodyStyle}>{children}</div>
    </div>
  )
}

export default Card
