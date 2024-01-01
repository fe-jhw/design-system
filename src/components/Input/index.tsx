import { ReactNode } from "react"
import "./Input.css"

const Input: React.FC<{
  placeholder: string
  size: string
  type?: string
  style?: any
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ placeholder, size, type, style, value, onChange }) => {
  return (
    <input
      className="input"
      type={type || "text"}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
