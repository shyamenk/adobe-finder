import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/api/auth/[...nextauth]/route'
type DeleteContext = {
  params: {
    propertyId: string
  }
}
export async function DELETE(req: Request, context: DeleteContext) {
  const { propertyId } = context.params

  const session = await getServerSession(authOptions)

  if (!session) return

  try {
    await prisma.favorite.deleteMany({
      where: {
        propertyId,
        userId: session?.user?.id,
      },
    })
    return NextResponse.json({ message: 'Succesfully Removed' })
  } catch (error) {
    return NextResponse.json(error)
  }
}

type Props = {
  params: {
    propertyId: string
  }
}
export async function GET(req: Request, { params }: Props) {
  const session = await getServerSession(authOptions)

  try {
    const favourite = await prisma.favorite.findFirst({
      where: {
        propertyId: params.propertyId,
        userId: session?.user?.id,
      },
    })

    if (favourite) {
      return NextResponse.json({ isFavourite: true })
    } else {
      return NextResponse.json({ isFavourite: false })
    }
  } catch (error) {
    console.error('Failed to fetch favourites:', error)
    return NextResponse.json({ message: 'Failed to fetch favourites' })
  }
}
