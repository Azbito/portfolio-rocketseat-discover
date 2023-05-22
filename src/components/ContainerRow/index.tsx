import { ReactNode } from "react";
import './styles.scss'

type ContainerRowProps = { children: ReactNode }

export function ContainerRow({ children }: ContainerRowProps) {
  return (
    <div className="container-row">
      {children}
    </div>
  )
}