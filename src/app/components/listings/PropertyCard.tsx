import { formatCurrencyINR } from '@/utils/formatCurrencyINR'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CustomImage from '@/components/ui/CustomImage'
import FavouriteItem from '@/components/favourites/FavouriteItem'
import { Bath, Bed, Car } from 'lucide-react'
import { MdOutlineWeekend } from 'react-icons/md'
import { Property } from '@prisma/client'

const BedIcon = () => (
  <Bed className="text-sky-500 hover:text-sky-600 w-6 h-8" />
)
const BathIcon = () => (
  <Bath className="text-sky-500 hover:text-sky-600w-6 h-6" />
)
const ParkingIcon = () => (
  <Car className="text-sky-500 hover:text-sky-600 w-6 h-6" />
)
const FurnishedIcon = () => (
  <MdOutlineWeekend className="text-sky-500 hover:text-sky-600 w-6 h-6" />
)

interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative  max-w-md rounded-lg overflow-hidden shadow-lg mx-auto border">
      {property.isFeatured && (
        <Button
          variant={'secondary'}
          className=" absolute top-0 -left-0 inline-flex mt-3 ml-3 px-4  rounded-lg z-10 text-sm font-medium select-none"
        >
          Featured
        </Button>
      )}
      <FavouriteItem propertyId={property.id} />
      <Link href={`/listings/${property.id}`}>
        <CustomImage
          src={property.imageUrls[4]}
          alt={property.name}
          width={640}
          height={280}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold line-clamp-1">
            {property.name}
          </h3>
          <p className=" mt-2 line-clamp-2">{property.description}</p>
          <div className="md:flex md:items-center md:space-x-4 mb-2 mt-2">
            <BedIcon />
            <span>
              {property.bed}{' '}
              <span className="inline-block md:hidden">Beds</span>{' '}
            </span>
            <BathIcon />
            <span>{property.bath} </span>
            <span className="inline-block md:hidden">Baths</span>{' '}
            {property.parking && (
              <div>
                <ParkingIcon />
                <span className="inline-block md:hidden">Parking</span>{' '}
              </div>
            )}
            {property.parking && (
              <div>
                <FurnishedIcon />
                <span className="inline-block md:hidden">Furnished</span>{' '}
              </div>
            )}
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {formatCurrencyINR(property.price)}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-2">
              / month
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PropertyCard
