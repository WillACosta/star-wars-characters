'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Shimmer from '../layout/Shimmer'

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Shimmer className='h-10 w-35' />
  }

  if (resolvedTheme === 'dark') {
    return (
      <ButtonContainer title='Switch to Light Mode'>
        <Moon className='cursor-pointer' onClick={() => setTheme('light')} />
      </ButtonContainer>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <ButtonContainer title='Switch to Dark Mode'>
        <Sun className='cursor-pointer' onClick={() => setTheme('dark')} />
      </ButtonContainer>
    )
  }
}

function ButtonContainer({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div
      title={title}
      className='dark:bg-[#2f2f2f] dark:hover:bg-[#3f3f3f] bg-app-gray-100 hover:bg-app-gray-200 ease-linear duration-100 h-[40px] w-[40px] flex items-center justify-center rounded-sm p-1'
    >
      {children}
    </div>
  )
}
