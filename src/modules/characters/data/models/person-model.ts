import { ResultsDefaultResponse } from './default-response'

export type PersonNetworkResponse = ResultsDefaultResponse<PersonNetworkModel>

export type PersonNetworkModel = {
  name: string
  homeworld: string
  height: string
  mass: string
  gender: string
  url: string
}
