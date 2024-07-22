type SpinnerProps = {
  size?: number
  className?: string
}

export default function LoadingSpinner({ size = 25, className }: SpinnerProps) {
  return (
    <div>
      <span
        className={`text-gray-300 dark:text-gray-600 flex flex-col items-center w-full justify-center ${className}`}
      >
        <span
          role='status'
          className='text-transparent select-none'
          tabIndex={5}
          autoFocus
        >
          Loading new items, please wait...
        </span>

        <svg
          focusable={false}
          aria-hidden='true'
          width={size}
          height={size}
          viewBox='0 0 12 12'
          fill='none'
          stroke='currentColor'
          strokeWidth={1.8}
          xmlns='http://www.w3.org/2000/svg'
          className='animate-rotate-pulse animate-spin'
        >
          <path d='M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11' />
        </svg>
      </span>
    </div>
  )
}
