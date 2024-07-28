'use client'

import Button from '@/components/atoms/Button'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div>
          <h2>Oops! Something went wrong!</h2>
          <Button onClick={() => reset()} label={'Try again'} />
        </div>
      </body>
    </html>
  )
}
