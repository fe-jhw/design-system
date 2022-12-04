/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"

const buttonStyle = {
  width: "32px",
  height: "32px",
  border: "none",
  outline: "none",
  background: "rgba( 0, 0, 0, 0.2 )",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  top: `calc(50% - 16px)`,
}

export default function Carousel({ style = {}, children = [] }) {
  const [curIndex, setCurIndex] = useState(0)
  return (
    <div
      css={{
        ...style,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {curIndex > 0 && (
        <button
          onClick={() => setCurIndex((prev) => prev - 1)}
          css={{
            ...buttonStyle,
            position: "absolute",
            left: "8px",
          }}
        >
          <AiOutlineLeft />
        </button>
      )}
      {curIndex < children.length - 1 && (
        <button
          onClick={() => setCurIndex((prev) => prev + 1)}
          css={{ ...buttonStyle, position: "absolute", right: "8px" }}
        >
          <AiOutlineRight />
        </button>
      )}
      <div
        css={{
          display: "flex",
          marginLeft: `-${curIndex * 100}%`,
          width: "100%",
          height: "100%",
          transition: "margin 250ms ease-in-out",
        }}
      >
        {children.map((child) => (
          <div
            css={css`
              width: 100%;
              height: 100%;
              flex: none;
              //text-align: center;
            `}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
