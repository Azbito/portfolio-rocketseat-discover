import { ReactNode } from "react"
import './styles.scss'

type ContainerColumnProps = { children: ReactNode }

export function ContainerColumn({ children }: ContainerColumnProps) {
  return (
    <div className="container">
      {children}
    </div>
  )
}