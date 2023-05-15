import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
export async function POST(req: Request) {
  const { propertyId } = await req.json()
  const { userId } = auth()

  if (!userId) return
  try {
    const isFavourite = await prisma.favorite.findUnique({
      where: {
        propertyId,
      },
    })

    if (isFavourite) {
      return NextResponse.json({
        message: 'Its Already in your favorite List',
      })
    } else {
      await prisma.favorite.create({
        data: {
          propertyId,
          userId,
        },
      })
      return NextResponse.json({ message: 'Succesfully Added ' })
    }
  } catch (error) {
    return NextResponse.json(error)
  }
}
