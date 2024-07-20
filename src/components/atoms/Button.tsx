import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ label, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-white border p-2 uppercase px-14 border-primary disabled:text-outline
        disabled:border-outline disabled:hover:bg-white disabled:hover:text-outline disabled:cursor-not-allowed
        text-primary hover:bg-primary hover:text-white ease-linear duration-200 ${className}`}
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  )
}
