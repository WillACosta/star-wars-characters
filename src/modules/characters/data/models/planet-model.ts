import { ResultsDefaultResponse } from './default-response'

export type PlanetNetworkResponse = ResultsDefaultResponse<PlanetNetworkModel>

export type PlanetNetworkModel = {
  name: string
  population: string
  residents: string[]
}
