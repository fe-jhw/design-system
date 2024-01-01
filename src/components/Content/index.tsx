import { ReactNode } from "react"
import "./Content.css"

const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="content">{children}</main>
}

export default Content
