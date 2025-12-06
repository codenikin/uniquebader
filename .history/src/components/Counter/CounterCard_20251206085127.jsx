/* eslint-disable react/prop-types */
'use client'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'
const CounterCard = ({ counterNumber, counterDesc, counterSuffex }) => {
  const [startCounting, setStartCounting] = useState(false)
  const cardRef = useRef(null)
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.dataset.trigger = 'counter-card'
    }
  }, [])
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const start = () => setStartCounting(true)
    const reset = () => setStartCounting(false)

    card.addEventListener('start-counting', start)
    card.addEventListener('reset-counting', reset)

    return () => {
      card.removeEventListener('start-counting', start)
      card.removeEventListener('reset-counting', reset)
    }
  }, [])
  return (
    <div
      ref={cardRef}
      className="text-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-px before:h-full before:bg-linear-to-b before:from-transparent before:via-white before:to-transparent />"
    >
      <div>
        <CountUp
          start={startCounting ? 0 : null}
          end={counterNumber}
          suffix={counterSuffex}
          duration={2}
          enableReinitialize={true}
          className="font-Rajdhani text-[50px] text-white font-bold"
        />
      </div>
      <p className="font-Nunito text-white opacity-80 capitalize">{counterDesc}</p>
    </div>
  )
}

export default CounterCard
