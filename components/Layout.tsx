import Link from 'next/link'

export default function Layout({
  title,
  children,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Navbar title={title} />
      <main className="flex flex-1 h-full w-full flex-col items-center justify-start p-20 pt-10">
        {children}
      </main>
    </div>
  )
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
