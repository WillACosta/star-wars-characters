import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ label, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-white border p-2 uppercase px-14 border-primary disabled:text-outline disabled:border-outline text-primary ${className}`}
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  )
}
