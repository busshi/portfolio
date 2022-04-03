import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="justify-center px-5 md:px-28 py-0 md:py-5">{children}</div>
}

export default Container
