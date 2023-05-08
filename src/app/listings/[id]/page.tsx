import PropertyDetails from '@/components/listings/PropertyDetails'
import { prisma } from '@/config/prisma'

interface Props {
  params: {
    id: string
  }
}

const getPropertById = async (id: string) => {
  const data = await prisma.property.findUnique({
    where: {
      id: id,
    },
  })
  return data
}
const PropertyPage = async ({ params }: Props) => {
  const property = await getPropertById(params.id)

  return (
    <div>
      <PropertyDetails property={property} />
    </div>
  )
}

export default PropertyPage
