/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Card({
  imgUrl = "",
  title = "",
  description = "",
  date = "",
  style = {},
  children,
}) {
  return (
    <div
      css={css({
        borderRadius: "8px",
        backgroundColor: "white",
        overflow: "hidden",
        padding: "20px 30px 20px 15px",
        transition: "border 150ms ease-out, transform 150ms ease-out",
        ...style,
        "&:hover": {
          borderColor: "#1EA7FD50",
          transform: "translate3d(0, -3px, 0)",
          boxShadow: "rgba(0, 0, 0, 0.08) 0 3px 10px 0",
        },
      })}
    >
      {children}
    </div>
  )
}

{
  /* <Card imgUrl={} title={} description={} date={}/> */
}
