import { PersonNetworkResponse } from '@/modules/characters/data/models'
import { NextRequest, NextResponse } from 'next/server'

const SWAPI_BASE_URL = process.env.SWAPI_BASE_URL

export async function GET({ nextUrl }: NextRequest) {
  try {
    const queryParams = await nextUrl.searchParams
    const apiResponse = await fetch(`${SWAPI_BASE_URL}/people?${queryParams}`)
    const data = (await apiResponse.json()) as PersonNetworkResponse

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Oops! Something went wrong while fetching people data!',
        error,
      },
      { status: 500 }
    )
  }
}
