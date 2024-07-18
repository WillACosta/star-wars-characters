export type AsyncUseCase<Params, Result> = {
  execute(params: Params): Promise<Result>
}

export type SyncUseCase<Params, Result> = {
  execute(params: Params): Result
}
