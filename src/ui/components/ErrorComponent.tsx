import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const ErrorComponent = ({ children }: Props) => {
  return (
    <p className="fst-italic text-center">{children}</p>
  )
}


export default ErrorComponent
