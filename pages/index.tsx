import type { NextPage } from 'next'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="py-10 text-3xl font-bold">50 PROJECTS 50 DAYS</h1>
        <div className="grid w-full grid-cols-4 gap-4">
          <Project name="expanding-cards" idx={1}></Project>
          <Project name="progress-steps" idx={2}></Project>
          <Project name="rotating-nav" idx={3}></Project>
        </div>
      </main>
    </div>
  )
}

interface IProjectProps {
  name: string
  idx: number
}
function Project({ name, idx }: IProjectProps) {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const title = name.split('-').map(capitalize).join(' ')

  return (
    <Link href={`/projects/${name}`}>
      <div className="w-200 relative flex h-60 cursor-pointer flex-col items-center justify-center overflow-hidden border-2 border-gray-200 transition-colors duration-500 hover:border-pink-500">
        <h2 className="absolute z-30 flex h-full w-full flex-1 items-center justify-center text-white opacity-0 transition-all duration-500 hover:bg-pink-500 hover:opacity-100">
          {title}
        </h2>
        <img
          src={`img/${name}.jpg`}
          alt=""
          className="absolute z-10 h-[320px] w-[400px] object-contain"
        />
        <span className="absolute top-0 right-0 z-50 bg-pink-500 px-2 pb-1 text-white">
          Day {idx}
        </span>
      </div>
    </Link>
  )
}

export default Home
