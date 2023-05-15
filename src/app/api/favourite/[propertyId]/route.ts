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
    const removeFromFavourite = await prisma.favorite.delete({
      where: {
        propertyId,
      },
    })
    return NextResponse.json({ removeFromFavourite })
  } catch (error) {
    return NextResponse.json(error)
  }
}
