import React, { createContext, ReactNode, useContext } from "react"
import "./Menu.css"

type MenuItem = {
  children: ReactNode
  selectedKey: number
  onSelect: (key: number) => void
  mKey: number
}

type MenuProp = {
  children: ReactNode
  style?: any
}

const Menu: React.FC<MenuProp> & { Item: React.FC<MenuItem> } = ({
  style,
  children,
}) => {
  return (
    <ul className="menu" style={style}>
      {children}
    </ul>
  )
}

const Item: React.FC<MenuItem> = ({
  children,
  selectedKey,
  onSelect,
  mKey,
}) => {
  return (
    <li
      className={
        "menu-item" + (selectedKey === mKey ? " menu-item-selected" : "")
      }
      onClick={() => onSelect(mKey)}
    >
      <span className="menu-title-content">{children}</span>
    </li>
  )
}

Menu.Item = Item

export default Menu
