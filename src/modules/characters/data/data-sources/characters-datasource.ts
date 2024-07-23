import {
  PersonNetworkResponse,
  PlanetNetworkModel,
  PlanetNetworkResponse,
} from '../models'

export interface CharactersDataSource {
  getAllPlanets(page: number): Promise<PlanetNetworkResponse>
  getPlanetById(id: string): Promise<PlanetNetworkModel>
  getAllPeople(page: number): Promise<PersonNetworkResponse>
}
