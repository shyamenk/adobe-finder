import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/api/auth/[...nextauth]/route'

export async function POST(req: Request) {
  const { propertyId } = await req.json()

  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in.' })
  }

  try {
    const isFavourite = await prisma.favorite.findFirst({
      where: {
        propertyId,
        userId: session?.user.id,
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
          userId: session.user?.id,
        },
      })
      return NextResponse.json({ message: 'Succesfully Added ' })
    }
  } catch (error) {
    return NextResponse.json(error)
  }
}
