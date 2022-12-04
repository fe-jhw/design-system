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

export default function Carousel({
  style = {},
  children = [],
  columns = "single",
}) {
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
          marginLeft: `-${curIndex * (columns === "single" ? 100 : 50)}%`,
          width: "100%",
          height: "100%",
          transition: "margin 250ms ease-in-out",
        }}
      >
        {children.map((child) => (
          <div
            css={{
              width: columns === "single" ? "100%" : "calc(50% - 16px)",
              height: "100%",
              flex: "none",
              borderRadius: "8px",
              overflow: "hidden",
              boxSizing: "border-box",
              marginRight: "16px",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

// TODO: proptypes 활용하여 타입체크
// 반응형
// 개수 prop으로 받아서 여러개 보여주기
// 여러개일때 변경되야할 사항.width가 100%이면 안된다
// size에 따라 자동적으로 조절되어야함

// 부모의 width, heigh에 따라서 결정해야됨
// 부모의 width, height이 정해져있따면, 그냥 width만 나누면 됨
// 안정해져있으면 사이즈 작아질때 자동적으로 작아져야함
