import { ReactNode } from "react"
import "./Header.css"

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <header className="header">{children}</header>
}

export default Header
