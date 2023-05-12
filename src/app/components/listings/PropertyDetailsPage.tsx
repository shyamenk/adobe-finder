'use client'

import Slider from '@/components/ui/Slider'
import { Button } from '@/components/ui/button'
import { Property } from '@prisma/client'
import { Breadcrumb } from 'flowbite-react'
import { FaBath, FaBed, FaChartArea } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'

interface PropertyDetailsProps {
  property: Property | null
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <>
      <section className=" md:pb-10 pb-10 mt-10 px-2 md:px-10">
        <Breadcrumb
          aria-label="Default breadcrumb example"
          className=" hidden md:block py-3 px-5 rounded-lg bg-gray-100 dark:bg-gray-900"
        >
          <Breadcrumb.Item href="/">
            <HiHome />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/listings">Listings</Breadcrumb.Item>
          <Breadcrumb.Item>{property?.name}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="container ">
          <div className="mt-10">
            <Slider imageUrls={property?.imageUrls || ''} />
          </div>
        </div>
        <div className="container md:mt-10 mt-8">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 ">
              <h4 className="text-2xl font-medium">{property?.place}</h4>

              <ul className="py-6 flex items-center list-none">
                <li className="flex items-center gap-2 lg:mr-6 mr-4">
                  <FaChartArea className="uil uil-compress-arrows lg:text-3xl text-2xl ltr:mr-2 rtl:ml-2 text-sky-500" />
                  <span className="lg:text-xl"> 8000sqf</span>
                </li>

                <li className="flex items-center  gap-2 lg:mr-6 mr-4">
                  <FaBed className="lg:text-3xl text-2xl text-sky-500" />
                  <span className="lg:text-xl">{property?.bed} Beds</span>
                </li>

                <li className="flex items-center gap-2">
                  <FaBath className="uil uil-bath lg:text-3xl text-2xl ltr:mr-2 rtl:ml-2 text-sky-500" />
                  <span className="lg:text-xl">{property?.bath} Baths</span>
                </li>
              </ul>

              <p className="">
                Villa Azura is a stunning villa located on the beautiful island
                of Santorini, Greece. This contemporary property features
                breathtaking views of the Aegean Sea, a private infinity pool,
                and multiple outdoor living spaces. The interior of the villa is
                modern and stylish, with high-end finishes and amenities.
              </p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 md:p-4 md:px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-2xl font-medium">Price:</h5>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">
                        $ {property?.price}
                      </span>

                      <span className="bg-sky-500/10 text-sky-500 text-sm px-2.5  py-1 rounded ">
                        For Sale
                      </span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className=" text-sm">Days on Hously</span>
                        <span className="font-medium text-sm">124 Days</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className=" text-sm">Price per sq ft</span>
                        <span className="font-medium text-sm">$ 186</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className=" text-sm">
                          Monthly Payment (estimate)
                        </span>
                        <span className="font-medium text-sm">
                          $ 1497/Monthly
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex pb-2">
                    <div className="px-6 mb-2 w-1/2">
                      <Button
                        size={'sm'}
                        className=" bg-sky-600 hover:bg-sky-700 text-white rounded-md w-full"
                      >
                        Book Now
                      </Button>
                    </div>
                    <div className="px-6 w-1/2">
                      <Button
                        size={'sm'}
                        className=" bg-sky-600 hover:bg-sky-700 text-white rounded-md w-full"
                      >
                        Offer Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                    Have Question ? Get in touch!
                  </h3>

                  <div className="mt-6">
                    <Button
                      variant={'outline'}
                      className=" bg-transparent hover:bg-sky-500  text-sky-500 hover:text-white rounded-md"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertyDetails
