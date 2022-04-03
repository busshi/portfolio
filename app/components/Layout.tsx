import Github from './Github'
import LangageSwitcher from './LangageSwitcher'
import Meta from './Meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-orange-600/70 bg-fixed bg-center bg-no-repeat bg-cover text-neutral-200"
    style={{
      backgroundImage: `url('/bg.png')`,
    }}>
      <Meta />
      <LangageSwitcher />
      <Github />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
