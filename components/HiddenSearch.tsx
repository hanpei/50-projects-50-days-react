import * as React from 'react'
import { Icon } from '@iconify/react'

export interface IHiddenSearchProps {}

export function HiddenSearch(props: IHiddenSearchProps) {
  const [active, setActive] = React.useState(false)
  const [value, setValue] = React.useState('')
  const ref = React.useRef<HTMLInputElement>(null)

  const toggle = () => {
    if (active) {
      setActive(false)
      ref.current?.blur()
    } else {
      setActive(true)
      ref.current?.focus()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const width = active ? 'w-[200px] p-2' : 'w-0 p-0'

  return (
    <div className="flex">
      <input
        type="text"
        className={`transition-width h-10 duration-300 ${width} box-border focus:outline-none`}
        placeholder="Search..."
        ref={ref}
        value={value}
        onChange={handleInput}
      />
      <button
        className="flex h-10 w-10 items-center justify-center bg-white"
        onClick={toggle}
      >
        <Icon icon="ion:search" className="text-lg" />
      </button>
    </div>
  )
}
