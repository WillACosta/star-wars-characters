const DI_TYPES = {
  CharactersDataSource: Symbol.for('CharactersDataSource'),
  MemoryManagerService: Symbol.for('MemoryManagerService'),
  StarWarsCharactersRepository: Symbol.for('StarWarsCharactersRepository'),
  GetCharactersUseCase: Symbol.for('GetCharactersUseCase'),
  GetAvailablePlanetsUseCase: Symbol.for('GetAvailablePlanetsUseCase'),
  Crypto: Symbol.for('Crypto'),
}

export { DI_TYPES }
