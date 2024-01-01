import { ReactNode } from "react"
import "./Sider.css"

const Sider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <aside className="sider">
      <div className="sider-children">{children}</div>
    </aside>
  )
}

export default Sider
