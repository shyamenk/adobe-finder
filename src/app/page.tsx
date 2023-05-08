import Featured from '@/components/home/Featured'
import HeroSection from '@/components/home/HeroSection'
import { prisma } from '@/config/prisma'

const getProperty = async () => {
  return await prisma.property.findMany({
    where: {
      isFeatured: true,
    },
  })
}

export default async function Home() {
  const data = await getProperty()
  const property = data.slice(1, 7)
  return (
    <>
      <HeroSection />
      <Featured property={property} />
    </>
  )
}
