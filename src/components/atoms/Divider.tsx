type DividerProps = {
  hideInMobile?: boolean
}

export default function Divider({ hideInMobile }: DividerProps) {
  return (
    <div
      className={`divider border-b border-border ${
        hideInMobile ? 'max-sm:hidden' : ''
      }`}
    ></div>
  )
}
