import { prisma } from '@/config/prisma'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

type MetaDataProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
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

const DynamicPropertyDetails = dynamic(
  () => import('@/components/listings/PropertyDetailsPage')
)
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
      <DynamicPropertyDetails property={property} />
    </div>
  )
}

export default PropertyPage
