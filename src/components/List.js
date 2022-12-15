/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { useRef, useLayoutEffect, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export default function List({ delayPerIndex = 0.04, numItems = 5 }) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [])

  return (
    <motion.div initial="hidden" animate={controls} variants={{}}>
      {Array.from({ length: numItems }).map((_, i) => (
        <ListItem key={i} i={i} delayPerIndex={delayPerIndex} />
      ))}
    </motion.div>
  )
}

function ListItem({ delayPerIndex, i }) {
  const delayRef = useRef(0)
  const ref = useRef()

  useEffect(() => {
    delayRef.current = i * delayPerIndex
  }, [delayPerIndex])

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
      css={css`
        margin: 10px;
        height: 120px;
        width: calc(100% - 20px);
        background-color: blue;
        border-radius: 10px;
      `}
    />
  )
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (delayRef) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current },
  }),
}

// TODO: staggerChildren 속성 사용 방식으로 변경
//
