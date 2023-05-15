import PropertyDetails from '@/components/listings/PropertyDetailsPage'
import { prisma } from '@/config/prisma'
import { Metadata } from 'next'

type MetaDataProps = {
  params: { id: string }
}
export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const id = params.id

  const property = await prisma.property.findUnique({
    where: {
      id: id,
    },
  })

  return {
    title: property?.description,
  }
}
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
