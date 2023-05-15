import CustomImage from '@/components/ui/CustomImage'
import { formatCurrencyINR } from '@/utils/formatCurrencyINR'
import { Favorite, Property } from '@prisma/client'
import { Armchair, BathIcon, BedIcon, ParkingCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type FavoriteWithProperty = Favorite & {
  Property: Property | null
}

type FavoriteListProps = {
  favourite: FavoriteWithProperty
}

const FavouriteCard = ({ favourite }: FavoriteListProps) => {
  return (
    <div className="relative  max-w-md rounded-lg overflow-hidden shadow-lg mx-auto border">
      <Link href={`/listings/${favourite.Property?.id}`}>
        <CustomImage
          src={favourite.Property?.imageUrls[0] as string}
          alt={favourite.Property?.name as string}
          width={640}
          height={280}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold line-clamp-1">
            {favourite.Property?.name}
          </h3>
          <p className=" mt-2 line-clamp-2">
            {favourite.Property?.description}
          </p>
          <div className="md:flex md:items-center md:space-x-4 mb-2 mt-2">
            <BedIcon />
            <span>
              {favourite.Property?.bed}
              <span className="inline-block md:hidden">Beds</span>
            </span>
            <BathIcon />
            <span>{favourite.Property?.bath} </span>
            <span className="inline-block md:hidden">Baths</span>
            {favourite.Property?.parking && (
              <div>
                <ParkingCircleIcon />
                <span className="inline-block md:hidden">Parking</span>
              </div>
            )}
            {favourite.Property?.furnished && (
              <div>
                <Armchair />
                <span className="inline-block md:hidden">Furnished</span>
              </div>
            )}
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {formatCurrencyINR(Number(favourite.Property?.price))}
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

export default FavouriteCard
