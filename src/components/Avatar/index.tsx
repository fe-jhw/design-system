import { CSSProperties, ReactNode } from 'react'
import './Avatar.css'

type AvatarProp = {
  size: 'large'
  icon: ReactNode
  style?: CSSProperties
}

const Avatar: React.FC<AvatarProp> = ({ size, icon, style }) => {
  return (
    <div className="avatar" style={style}>
      {icon}
    </div>
  )
}

export default Avatar
