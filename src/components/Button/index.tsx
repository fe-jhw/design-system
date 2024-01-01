import { ReactNode } from "react"
import "./Button.css"

type ButtonProp = {
  size?: "large"
  type?: "primary" | "text"
  danger?: boolean
  style?: any
  onClick?: (e: any) => void
  children: ReactNode
}

const Button: React.FC<ButtonProp> = ({
  children,
  size,
  danger,
  onClick,
  type,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={
        `btn` +
        (type === "primary"
          ? " btn-primary"
          : type === "text"
          ? " btn-text"
          : " btn-default") +
        (size === "large" ? " btn-lg" : "") +
        (danger ? " btn-danger" : "")
      }
    >
      {children}
    </button>
  )
}

export default Button
