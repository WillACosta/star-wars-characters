import { NextRequest, NextResponse } from 'next/server'

import { PlanetNetworkResponse } from '@/modules/characters/data/models'

const SWAPI_BASE_URL = process.env.SWAPI_BASE_URL

export async function GET({ nextUrl }: NextRequest) {
  try {
    const queryParams = await nextUrl.searchParams
    const url = `${SWAPI_BASE_URL}/planets?${queryParams}`
    const apiResponse = await fetch(url)
    const data = (await apiResponse.json()) as PlanetNetworkResponse

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Oops! Something went wrong while fetching planet data!',
        error,
      },
      { status: 500 }
    )
  }
}
