import { prisma } from '@/config/prisma'
import dynamic from 'next/dynamic'

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

const DynamicPropertyCard = dynamic(
  () => import('@/components/ui/PropertyCard'),
  {
    loading: () => <p>Loading...</p>,
  }
)

async function getAllProperties() {
  const response = await prisma.property.findMany({})
  return response
}

const page = async () => {
  const property = await getAllProperties()

  return (
    <>
      <section>
        <div className="py-10 px-10">
          {/* <h1 className="py-8 text-2xl font-semibold">
            Welcome to Adobe Finder{' '}
          </h1> */}

          <div className="flex justify-start flex-col md:flex-row items-start gap-4 sm:gap-8">
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
            <Button
              variant={'outline'}
              className="text-sm flex items-center gap-2"
            >
              <BsFilter className="h-4 w-4 " />
              <span>Filter</span>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
            {property.map((item, idx) => (
              <DynamicPropertyCard key={idx} property={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
