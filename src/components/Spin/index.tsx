import { ReactNode } from "react"
import "./Spin.css"

type SpinProp = {
  spinning: boolean
  size: "large"
  children: ReactNode
}

const Spin: React.FC<SpinProp> = ({ children, size, spinning }) => {
  return (
    <div className="spin-nested-loading">
      <div>
        <div
          className={
            `spin` +
            (size === "large" ? " spin-lg" : "") +
            (spinning ? " spin-spinning" : "")
          }
        >
          <span className="spin-dot spin-dot-spin">
            <i className="spin-dot-item"></i>
            <i className="spin-dot-item"></i>
            <i className="spin-dot-item"></i>
            <i className="spin-dot-item"></i>
          </span>
        </div>
      </div>
      <div className={`spin-container` + (spinning ? " spin-blur" : "")}>
        {children}
      </div>
    </div>
  )
}

export default Spin
