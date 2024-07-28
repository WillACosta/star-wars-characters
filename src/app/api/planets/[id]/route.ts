import { PlanetNetworkResponse } from '@/modules/characters/data/models'
import { NextRequest, NextResponse } from 'next/server'

const SWAPI_BASE_URL = process.env.SWAPI_BASE_URL

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const apiResponse = await fetch(`${SWAPI_BASE_URL}/planets/${id}`)
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
