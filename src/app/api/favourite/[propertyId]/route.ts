import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'

type DeleteContext = {
  params: {
    propertyId: string
  }
}
export async function DELETE(req: Request, context: DeleteContext) {
  const { propertyId } = context.params

  try {
    await prisma.favorite.delete({
      where: {
        propertyId,
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
  try {
    const favourite = await prisma.favorite.findUnique({
      where: {
        propertyId: params.propertyId,
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
