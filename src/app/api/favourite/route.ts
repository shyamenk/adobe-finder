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
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { Favourite: true },
    })

    const isFavourite = user?.Favourite.some(
      (favourite) => favourite.propertyId === propertyId
    )
    if (isFavourite) {
      await prisma.favorite.deleteMany({
        where: {
          userId: session.user.id,
          propertyId,
        },
      })
      return NextResponse.json({ message: 'Deleted Succesfully ' })
    } else {
      await prisma.favorite.create({
        data: {
          userId: session.user.id,
          propertyId,
        },
      })
      return NextResponse.json({ message: 'Added Succesfully  ' })
    }
  } catch (error) {
    return NextResponse.json(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' })
  }
  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId: session?.user?.id },
      include: {
        Property: true,
      },
    })

    if (favorites) return NextResponse.json({ favorites, isFavourite: true })
    else
      return NextResponse.json({
        favorites,
        isFavourite: false,
      })
  } catch (error) {
    console.error('Error fetching favorites', error)
    return NextResponse.json({ error: 'Internal Server Error' })
  }
}
