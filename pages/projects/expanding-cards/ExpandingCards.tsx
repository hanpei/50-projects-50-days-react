import React, { useCallback, useState } from 'react'

interface IExpandingCardsProps {
  data: Pick<ICardProps, 'title' | 'src'>[]
}

export function ExpandingCards({ data }: IExpandingCardsProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const toggle = (i: number) => setCurrentIdx(i)

  return (
    <div className="flex flex-1 w-full h-full flex-row gap-2 ">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            src={item.src}
            title={item.title}
            expanded={index === currentIdx}
            onClick={() => toggle(index)}
          />
        )
      })}
    </div>
  )
}

interface ICardProps {
  title?: string
  src: string
  expanded: boolean
  onClick: () => void
}

function Card({ src, title, expanded, onClick }: ICardProps) {
  const flexValue = expanded ? 'flex-[5]' : 'flex-[0.5]'
  const opacityValue = expanded ? 'opacity-100' : 'opacity-0'
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  return (
    <div
      onClick={onClick}
      className={`${flexValue}  transition-flex relative cursor-pointer overflow-hidden rounded-lg duration-500 ease-in-out bg-gray-100`}
    >
      <img
        src={src}
        className="absolute z-10 h-full w-full select-none object-cover "
        draggable="false"
      />
      {title && (
        <h3
          className={`absolute bottom-5 left-5 z-20 text-2xl font-bold text-white transition-opacity duration-500 ease-in-out ${opacityValue}`}
        >
          {capitalize(title)}
        </h3>
      )}
    </div>
  )
}
