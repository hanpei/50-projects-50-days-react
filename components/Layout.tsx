import Link from 'next/link'
import { useEffect } from 'react'

export default function Layout({
  title,
  children,
  className,
}: {
  children: React.ReactNode
  title: string
  className: string
}) {
  useEffect(() => {
    document.title = title
  })

  const cls = `flex min-h-screen flex-col items-center justify-center ${className}`
  return <div className={cls}>{children}</div>
}

function Navbar({ title }: any) {
  return (
    <div className="flex w-full flex-row p-2 px-4">
      <Link passHref href="/">
        <a className=" text-pink-500 text-left">{'Home'}</a>
      </Link>
      <h1 className="pl-4 font-bold">{title}</h1>
    </div>
  )
}
