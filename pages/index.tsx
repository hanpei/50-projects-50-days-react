import type { NextPage } from 'next'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-3xl font-bold py-10">50 PROJECTS 50 DAYS</h1>
        <div className="grid grid-cols-4 gap-4 w-full">
          <Project name="expanding-cards" idx={1}></Project>
          <Project name="progress-steps" idx={2}></Project>
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
      <div className="relative flex h-40 w-200 cursor-pointer flex-col items-center justify-center border-2 border-gray-200 hover:border-pink-500 transition-colors duration-500 overflow-hidden">
        <h2 className="flex-1 flex justify-center items-center absolute w-full h-full opacity-0 text-white hover:bg-pink-500 hover:opacity-100 transition-all duration-500 z-30">
          {title}
        </h2>
        <img
          src={`img/${name}.jpg`}
          alt=""
          className="absolute z-10 object-cover w-[400px] h-[320px]"
        />
        <span className="absolute top-0 right-0 bg-pink-500 px-2 pb-1 z-50 text-white">
          Day {idx}
        </span>
      </div>
    </Link>
  )
}

export default Home
