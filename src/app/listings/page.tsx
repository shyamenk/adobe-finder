import PropertyList from '@/components/listings/PropertyList'
import { prisma } from '@/config/prisma'

async function getAllProperties() {
  const response = await prisma.property.findMany({})
  return response
}

const page = async () => {
  const property = await getAllProperties()

  return (
    <>
      <section>
        <PropertyList property={property} />
      </section>
    </>
  )
}

export default page
