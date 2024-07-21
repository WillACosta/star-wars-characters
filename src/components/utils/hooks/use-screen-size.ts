import { useEffect, useState } from 'react'

interface ScreenSize {
  width: number
  height: number
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    console.log('useScreenSize called')

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { screenSize }
}
