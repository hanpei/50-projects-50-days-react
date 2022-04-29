import * as React from 'react'

export interface IProgressStepsProps {
  steps: number
  current: number
}

export function ProgressSteps({ steps, current }: IProgressStepsProps) {
  const percent = ((current - 1) / (steps - 1)) * 100

  const bar =
    'bg-pink-500 absolute top-1/2 left-0 h-1 -z-1 -translate-y-1/2 duration-500 ease  box-border'
  const width = `${percent}%`

  return (
    <div className="flex justify-center items-center m-4 gap-10 relative box-border">
      <div
        style={{ width }}
        className="bg-pink-500 absolute top-1/2 left-0 h-1 -z-1 -translate-y-1/2 duration-500 ease"
      ></div>
      {new Array(steps).fill('').map((step, index) => (
        <Step key={index} done={current >= index + 1}>
          {index + 1}
        </Step>
      ))}
    </div>
  )
}

interface IStepProps {
  children: React.ReactNode
  done: boolean
}
function Step({ children, done }: IStepProps) {
  const base =
    'w-10 h-10 rounded-full border-4 flex justify-center items-center transition-color duration-500 ease bg-white relative z-20'
  const cls = done
    ? `${base} border-pink-500 text-pink-500`
    : `${base} border-gray-300 text-gray-400`

  return <div className={cls}>{children}</div>
}
