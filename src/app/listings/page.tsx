import { prisma } from '@/config/prisma'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BsFilter } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'

import PropertyCard from '@/components/ui/PropertyCard'

async function getAllProperties() {
  const response = await prisma.property.findMany({})
  return response
}

const page = async () => {
  const property = await getAllProperties()

  return (
    <>
      <section>
        <div className=" px-4  max-w-6xl sm:px-6 lg:px-8 lg:mb-16 ">
          <h1 className="py-8 text-2xl font-semibold">
            Welcome to Adobe Finder{' '}
          </h1>

          <div className="flex gap-6 ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Condoms">Condoms</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Duplex">Duplex</SelectItem>
                  <SelectItem value="Bungalow">Bungalow</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Low to High</SelectItem>
                  <SelectItem value="banana">High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="relative flex">
              <Input
                className="w-64 pl-8"
                placeholder="Search Property by Name, location..."
              />
              <GoSearch className="absolute top-3 left-2 " />
            </div>
            <Button variant={'outline'} className="text-sm ">
              <BsFilter className="mr-2 h-4 w-4 " />
              Apply filter
            </Button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-10">
            {property.map((item, idx) => (
              <PropertyCard key={idx} property={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
