'use client'
import ImageCarousel from '@/components/ui/Carousal'
import { formatCurrencyINR } from '@/utils/formatCurrencyINR'
import { Property } from '@prisma/client'
import Link from 'next/link'
import { FaBath, FaBed, FaCar } from 'react-icons/fa'
import { MdWeekend } from 'react-icons/md'

const BedIcon = () => <FaBed className="text-secondary hover:text-white" />
const BathIcon = () => <FaBath className="text-secondary hover:text-white" />
const ParkingIcon = () => <FaCar className="text-secondary hover:text-white" />
const FurnishedIcon = () => (
  <MdWeekend className="text-secondary hover:text-white" />
)

interface PropertyDetailsProps {
  property: Property | null
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <section className="py-4">
      <nav aria-label="breadcrumb" className="px-4">
        <ol className="flex h-8 space-x-2 dark:text-gray-100">
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
        <h1 className="py-4 text-3xl text-gray-600 font-semibold">
          Propery Details
        </h1>

        <div className="grid grid-cols-1 items-start gap-8 sm:grid-span-1  md:grid-cols-2">
          <div className="grid  gap-4 md:grid-cols-1 border p-2">
            <ImageCarousel
              slides={property?.imageUrls || []}
              autoSlideInterval={2000}
            />
          </div>
          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              {property?.isFeatured ? 'Featured' : ''}
            </strong>

            <div className=" mt-2 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {property?.name}
                </h1>

                <p className="text-sm">Highest Rated Product</p>

                <div className="-ms-0.5 flex">
                  <svg
                    className="h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-lg font-bold">
                {formatCurrencyINR(Number(property?.price))}
              </p>
            </div>

            <div className="mt-2">
              <div className="prose max-w-none">
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
                <button
                  type="submit"
                  className="block rounded bg-secondary px-8 py-2 text-md font-medium text-white hover:bg-secondary-light"
                >
                  Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
