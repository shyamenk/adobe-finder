import { prisma } from '@/config/prisma'
import { supabase } from '@/config/supaBase'

import { NextResponse } from 'next/server'

type FormFields = {
  [key: string]: string | boolean | File
}
export async function POST(req: Request) {
  const formData = await req.formData()
  const {
    name,
    place,
    description,
    price,
    bed,
    bathroom,
    parking,
    furnished,
    featured,
    userId,
  } = Object.fromEntries(formData.entries())

  const files: FormFields = {}

  const imageUrls = []
  for (const entry of formData.entries()) {
    const [key, value] = entry

    if (value instanceof Blob) {
      files[key] = value
      const fileId = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 10)}`
      const { data, error } = await supabase.storage
        .from('photos')
        .upload(`images/${fileId}`, value)
      if (error) {
        console.error('Error uploading image:', error)
      } else {
        const {
          data: { publicUrl },
        }: { data: { publicUrl: string } } = await supabase.storage
          .from('photos')
          .getPublicUrl(data.path)

        imageUrls.push(publicUrl)
        console.log('Image uploaded:', publicUrl)
      }
    }
  }

  const property = await prisma.property.create({
    data: {
      name: name as string,
      place: place as string,
      description: description as string,
      price: Number(price),
      bed: Number(bed),
      bath: Number(bathroom),
      parking: parking === 'true',
      isFeatured: featured === 'true',
      furnished: furnished === 'true',
      imageUrls: imageUrls.map((url) => url),
      userId: String(userId),
    },
  })

  return NextResponse.json({ property })
}
