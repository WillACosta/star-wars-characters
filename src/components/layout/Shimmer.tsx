export default function Shimmer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-app-gray-200 dark:bg-app-gray-400 ${className}`}
      {...props}
    />
  )
}
