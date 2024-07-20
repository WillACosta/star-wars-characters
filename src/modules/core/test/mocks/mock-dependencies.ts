export class MockStarWarsCharactersRepository {
  getAllPlanets = jest.fn()
  getAllPeople = jest.fn()
  getPlanet = jest.fn()
}

export class MockMemoryManagerService {
  getData = jest.fn()
  setData = jest.fn()
}

export class MockCrypto {
  randomUUID = jest.fn()
}

export class MockPlanetDataSource {
  getAllPlanets = jest.fn()
  getAllPeople = jest.fn()
  getPlanetById = jest.fn()
}
