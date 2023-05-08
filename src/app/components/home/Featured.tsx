// import CustomImage from '@/components/utils/CustomImage'
import { FC } from 'react'
import { Property } from '@prisma/client'
import PropertyCard from '@/components/ui/PropertyCard'

interface FeaturedProps {
  property: Property[]
}

const Featured: FC<FeaturedProps> = ({ property }: FeaturedProps) => {
  return (
    <div className="container mx-auto px-6 md:px-10 mb-10">
      <div className="mb-8">
        <h2 className="mb-4  font-bold text-gray-800 dark:text-white md:text-4xl">
          <span className="text-mode-text text-4xl">Featured</span> Properties
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {property.map((item) => (
          <div key={item.id} className="">
            <PropertyCard property={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
