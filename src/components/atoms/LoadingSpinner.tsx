type SpinnerProps = {
  size?: number
  className?: string
}

export default function LoadingSpinner({ size = 25, className }: SpinnerProps) {
  return (
    <span
      className={`text-gray-300 dark:text-gray-600 inline-flex w-[${size}px] h-[${size}px] animate-spin ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        stroke='currentColor'
        strokeWidth={12}
        xmlns='http://www.w3.org/2000/svg'
        className='animate-rotate-pulse'
      >
        <path d='M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11' />
      </svg>
    </span>
  )
}
