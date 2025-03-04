import { PersonNetworkModel, PlanetNetworkModel } from '../../data/models'

export interface StarWarsCharactersRepository {
  getAllPeople(page: number): Promise<PersonNetworkModel[]>
  getAllPlanets(page: number): Promise<PlanetNetworkModel[]>
  getPlanetDetails(url: string): Promise<PlanetNetworkModel>
}
