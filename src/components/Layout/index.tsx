import { CSSProperties, JSXElementConstructor, ReactNode } from "react"
import "./Layout.css"

interface LayoutProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Layout = ({
  children,
  style,
}:LayoutProps): JSX.Element => {
  return (
    <section className="layout" style={style}>
      {children}
    </section>
  )
}

export default Layout
