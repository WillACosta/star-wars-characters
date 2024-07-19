import {
  PlanetNetworkResponse
} from '@/modules/characters/data/models'

import { NextRequest, NextResponse } from 'next/server'

const SWAPI_BASE_URL = process.env.SWAPI_BASE_URL

export async function GET(_: NextRequest) {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/planets`)
    const data = (await response.json()) as PlanetNetworkResponse

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json('Something went wrong!', { status: 500 })
  }
}
