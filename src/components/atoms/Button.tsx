import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
  expanded?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  label,
  className,
  expanded = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`bg-transparent dark:bg-primary
         dark:text-app-gray-100 dark:hover:bg-[#0f2235] dark:border-[#0f2235] border p-2
         dark:disabled:bg-app-gray-400 dark:disabled:border-app-gray-400 dark:disabled:text-app-gray-100
         uppercase px-14 border-primary disabled:text-app-gray-200 disabled:hover:text-app-gray-200
        disabled:border-app-gray-200 disabled:hover:bg-white disabled:cursor-not-allowed
        text-primary hover:bg-primary hover:text-white ease-linear duration-200 ${
          expanded && 'lg:w-[400px]'
        } ${className}`}
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  )
}
