type DividerProps = {
  hideInMobile?: boolean
}

export default function Divider({ hideInMobile }: DividerProps) {
  return (
    <div
      className={`divider border-b border-app-gray-100 ${hideInMobile ? 'max-sm:hidden' : ''}`}>
    </div>
  )
}
