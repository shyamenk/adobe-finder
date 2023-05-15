import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
export async function POST(req: Request) {
  const { propertyId } = await req.json()
  const { userId } = auth()

  if (!userId) return NextResponse.redirect('/sign-in')
  try {
    const addToFavourite = await prisma.favorite.create({
      data: {
        userId,
        propertyId,
      },
    })
    return NextResponse.json({ addToFavourite })
  } catch (error) {
    return NextResponse.json(error)
  }
}
