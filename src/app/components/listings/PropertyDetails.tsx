'use client'
import ImageCarousel from '@/components/ui/Carousal'
import { Button } from '@/components/ui/button'
import { formatCurrencyINR } from '@/utils/formatCurrencyINR'
import { Property } from '@prisma/client'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import { FaBath, FaBed, FaCar } from 'react-icons/fa'
import { MdWeekend } from 'react-icons/md'

const BedIcon = () => <FaBed className="w-6 h-6 text-tertiary" />
const BathIcon = () => <FaBath className="w-6 h-6 text-tertiary " />
const ParkingIcon = () => <FaCar className="w-6 h-6 text-tertiary " />
const FurnishedIcon = () => <MdWeekend className="w-6 h-6 text-tertiary" />

interface PropertyDetailsProps {
  property: Property | null
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <section className="py-4 px-4">
      <nav aria-label="breadcrumb" className="px-4">
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link
              href="/"
              title="Back to homepage"
              className="flex items-center hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <span className="dark:text-gray-400">/</span>
            <Link
              href={'/listings'}
              className="flex items-center px-1 capitalize hover:underline"
            >
              Property
            </Link>
          </li>

          <li className="flex items-center space-x-1">
            <span className="dark:text-gray-200">/</span>
            <p className="flex items-center px-1 text-gray-600 capitalize hover:underline  cursor-default">
              {property?.name}
            </p>
          </li>
        </ol>
      </nav>
      <div className="relative mx-auto max-w-screen-xl px-4 py-2">
        <h1 className="py-4 text-3xl font-semibold">Propery Details</h1>

        <div className="grid grid-cols-1 items-start gap-8 sm:grid-span-1 md:grid-cols-2">
          <div className="grid  gap-4 md:grid-cols-1  rounded">
            <ImageCarousel
              slides={property?.imageUrls || []}
              autoSlideInterval={2000}
              // autoSlide=
            />
          </div>
          <div className="sticky top-0">
            <strong className="rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-sky-500">
              {property?.isFeatured ? 'Featured' : ''}
            </strong>

            <div className=" mt-2 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {property?.name}
                </h1>

                <p className="text-sm">Highest Rated Product</p>

                <div className="-ms-0.5 flex text-secondary">
                  <AiFillStar className="w-6 h-6 text-gray-800 dark:text-sky-500 " />
                  <AiFillStar className="w-6 h-6 text-gray-800  dark:text-sky-500" />
                  <AiFillStar className="w-6 h-6 text-gray-800  dark:text-sky-500" />
                  <AiFillStar className="w-6 h-6 text-gray-500  dark:text-sky-500" />
                  <AiFillStar className="w-6 h-6 text-gray-500 dark:text-secondary" />
                </div>
              </div>

              <p className="text-lg font-bold">
                {formatCurrencyINR(Number(property?.price))}
              </p>
            </div>

            <div className="mt-2">
              <div className="prose max-w-none text-primary">
                <p>{property?.description}</p>
              </div>
            </div>

            <form className="mt-2">
              <fieldset>
                <legend className="mb-2 text-sm font-medium">Amenity </legend>
                <div className="md:flex md:items-center md:space-x-4 mb-2 mt-2">
                  <BedIcon />
                  <span>
                    {property?.bed}{' '}
                    <span className="inline-block md:hidden">Beds</span>{' '}
                  </span>
                  <BathIcon />
                  <span>{property?.bath} </span>
                  <span className="inline-block md:hidden">Baths</span>{' '}
                  {property?.parking && (
                    <div>
                      <ParkingIcon />
                      <span className="inline-block md:hidden">
                        Parking
                      </span>{' '}
                    </div>
                  )}
                  {property?.parking && (
                    <div>
                      <FurnishedIcon />
                      <span className="inline-block md:hidden">
                        Furnished
                      </span>{' '}
                    </div>
                  )}
                </div>
              </fieldset>

              <div className="mt-8 flex gap-4">
                <Button
                  type="submit"
                  variant={'outline'}
                  className="block rounded bg-tertiary px-8 py-2 text-md font-medium"
                >
                  Contact
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
