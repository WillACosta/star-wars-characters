import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
  expanded?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  label,
  className,
  expanded = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`bg-white border p-2 uppercase px-14 border-primary disabled:text-app-gray-200
        disabled:border-app-gray-200 disabled:hover:bg-white disabled:hover:text-app-gray-200 disabled:cursor-not-allowed
        text-primary hover:bg-primary hover:text-white ease-linear duration-200 ${
          expanded && 'lg:w-[400px]'
        } ${className}`}
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  )
}
