import { useState } from 'react'
import Layout from '../../../components/Layout'
import ExpandingCards from '../expanding-cards'
import { ProgressSteps } from '../../../components/ProgressSteps'

export default function Index() {
  const steps = 4
  const [current, setCurrent] = useState(0)
  const handleNext = () => {
    if (current >= steps) return
    setCurrent(current + 1)
  }
  const handlePrev = () => {
    if (current <= 0) return
    setCurrent(current - 1)
  }

  return (
    <Layout title="Progress Steps">
      <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
        <ProgressSteps steps={steps} current={current} />
        <div className="flex gap-2 mt-5">
          <button
            className="btn-primary"
            disabled={current === 0}
            onClick={handlePrev}
          >
            prev
          </button>
          <button
            className="btn-primary"
            disabled={current === 4}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </Layout>
  )
}
