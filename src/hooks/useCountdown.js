import { useState, useEffect } from 'react'

const TOTAL_TIME = 20 * 60

export function useCountdown(gameOver, setGameOver) {
  const [time, setTime] = useState(TOTAL_TIME)

  useEffect(() => {
    if (time === 0) {
      setGameOver(true)
    }

    const timer = setTimeout(() => {
      if (!gameOver && time > 0) setTime(time - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [gameOver, time, setGameOver])

  return { time, timePassed: TOTAL_TIME - time }
}
