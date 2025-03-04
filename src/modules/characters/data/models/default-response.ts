export type ResultsDefaultResponse<T> = {
  count: number
  next: string
  previous: string | null
  results: T[]
}
