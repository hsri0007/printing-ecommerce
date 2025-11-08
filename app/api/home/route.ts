import { HOMEPAGE_DATA } from "@/data/home-data/home-data"
import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this could read from a DB. For now, we return structured JSON.

  return NextResponse.json(HOMEPAGE_DATA, {
    headers: {
      // Cache API response for 10 minutes (tune as needed)
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=60",
    },
  })
}
