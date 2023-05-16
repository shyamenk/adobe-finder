import { prisma } from '@/config/prisma'

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const res = await req.json()
  const property = await prisma.property.create({
    data: {
      name: res.formData.name,
      type: res.formData.type,
      place: res.formData.place,
      description: res.formData.description,
      price: res.formData.price,
      bed: res.formData.bed,
      bath: res.formData.bath,
      parking: res.formData.parking,
      isFeatured: res.formData.isFeatured,
      furnished: res.formData.furnished,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrls: res.imageUrls.map((image: any) => image),
      userId: res.userId,
    },
  })

  return NextResponse.json({ property })
}
