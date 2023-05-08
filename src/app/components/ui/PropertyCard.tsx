import CustomImage from '@/components/utils/CustomImage'
import { formatCurrencyINR } from '@/utils/formatCurrencyINR'

import { FaBath, FaBed, FaCar } from 'react-icons/fa'
import { MdWeekend } from 'react-icons/md'

const BedIcon = () => <FaBed className="text-secondary hover:text-white" />
const BathIcon = () => <FaBath className="text-secondary hover:text-white" />
const ParkingIcon = () => <FaCar className="text-secondary hover:text-white" />
const FurnishedIcon = () => (
  <MdWeekend className="text-secondary hover:text-white" />
)

import { Property } from '@prisma/client'
import Link from 'next/link'
interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 max-w-md rounded-lg overflow-hidden shadow-lg mx-auto border">
      <span className=" absolute -top-3 -left-3 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-secondary text-sm font-medium text-white select-none">
        Featured
      </span>
      <Link href={`/listings/${property.id}`}>
        <CustomImage
          src={property.imageUrls[4]}
          alt={property.name}
          width={640}
          height={280}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {property.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {property.description}
          </p>
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
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
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
