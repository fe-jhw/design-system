import { CloseOutlined } from "@ant-design/icons"
import { ReactNode } from "react"
import "./Modal.css"

type ModalProp = {
  title: string
  open: boolean
  footer: null
  children: ReactNode
  onCancel: () => void
}

const Modal: React.FC<ModalProp> = ({
  children,
  title,
  open,
  footer,
  onCancel,
}) => {
  return (
    <>
      {open && (
        <div>
          <div className="modal-root">
            <div className="modal-mask"></div>
            <div
              tabIndex={-1}
              className="modal-wrap"
              onClick={(e) => {
                if ((e.target as HTMLDivElement).className === "modal-wrap")
                  onCancel()
              }}
            >
              <div className="modal">
                <div className="modal-content">
                  <button className="modal-close" onClick={onCancel}>
                    <span className="modal-close-x">
                      <CloseOutlined />
                    </span>
                  </button>
                  <div className="modal-header">
                    <div className="modal-title">{title}</div>
                  </div>
                  <div className="modal-body">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
