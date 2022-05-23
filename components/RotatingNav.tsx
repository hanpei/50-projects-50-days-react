import * as React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

type NavItem = {
  key: string
  iconName: string
  value: string
  url: string
}

export interface INavProps {
  items: NavItem[]
  isShow: boolean
}

function Nav(props: INavProps) {
  const { items, isShow } = props
  const cls = isShow
    ? 'translate-x-0 transition-all duration-500'
    : '-translate-x-[150%] transition-all duration-500'

  return (
    <nav className={'fixed bottom-20 left-10 ' + cls}>
      <ul>
        {items.map((item, index) => (
          <li
            className="flex w-20  flex-row items-center py-2 text-white"
            key={item.key}
            onClick={(e) => {
              console.log(props)
            }}
          >
            <Icon icon={item.iconName} />
            <span className="pl-2">{item.value}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export interface IContainerProps {
  children: React.ReactNode
  nav: NavItem[]
}

export function RotatingContainer(props: IContainerProps) {
  const [isShow, setIsShow] = React.useState(false)
  const clsNav = `fixed -left-[100px] -top-[100px] h-[200px] w-[200px] rounded-[50%] bg-pink-500 transition-all duration-500 ${
    isShow ? '-rotate-[70deg]' : ''
  }`

  const clsContainer = `min-h-screen w-full origin-top-left transition-all duration-500 bg-white pt-20 ${
    isShow ? 'rotate-[-20deg]' : ''
  }`

  const toggle = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="h-full w-full bg-slate-700">
      <div className={clsContainer}>
        <div className={clsNav}>
          <Icon
            icon="ion:close-sharp"
            color="white"
            width="30"
            className="absolute left-[23%] bottom-[23%]"
            onClick={toggle}
          />
          <Icon
            icon="ion:menu-sharp"
            color="white"
            width="30"
            className="absolute right-[23%] bottom-[23%]"
            onClick={toggle}
          />
        </div>
        {props.children}
      </div>
      <Nav items={props.nav} isShow={isShow} />
    </div>
  )
}

RotatingContainer.Nav = Nav
