'use client'
import React, { useState, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

import { GoSearch } from 'react-icons/go'
import dynamic from 'next/dynamic'

const DynamicPropertyCard = dynamic(
  () => import('@/components/ui/PropertyCard'),
  {
    loading: () => <p>Loading...</p>,
  }
)

interface Property {
  id: string
  name: string
  type: string
  place: string
  description: string
  price: number
  bed: number
  bath: number
  parking: boolean
  furnished: boolean
  isFeatured: boolean
  imageUrls: string[]
  userId: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type PropertyProps = {
  property: Property[]
}

const PropertyList = ({ property }: PropertyProps) => {
  const [propertyType, setPropertyType] = useState<string>()
  const [sortType, setSortType] = useState<string>()
  const [search, setSearch] = useState<string>()

  // Filter the property data based on property type
  const filteredProperty = useMemo(() => {
    if (!propertyType) {
      return property
    }
    return property.filter((property) => property.type === propertyType)
  }, [property, propertyType])

  const sortedProperty = filteredProperty.sort((a, b) => {
    const isReversed = sortType?.endsWith('-desc') ? -1 : 1
    const sortField = sortType?.split('-')[0]

    if (sortField === 'price') {
      return (a[sortField] - b[sortField]) * isReversed
    }

    if (sortField === 'name') {
      return a[sortField].localeCompare(b[sortField]) * isReversed
    }

    return 0
  })
  const searchedProperty = useMemo(() => {
    if (!search) {
      return sortedProperty
    }
    const keyword = search.toLowerCase()
    return sortedProperty.filter((property) =>
      property.name.toLowerCase().includes(keyword)
    )
  }, [sortedProperty, search])

  return (
    <div className="py-10 px-10">
      <div className="flex justify-start flex-col md:flex-row items-start gap-4 sm:gap-8">
        <Select onValueChange={(value) => setPropertyType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condoms">Condoms</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="duplex">Duplex</SelectItem>
              <SelectItem value="bungalow">Bungalow</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setSortType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="price-asc">Low to High</SelectItem>
              <SelectItem value="price-desc">High to Low</SelectItem>
              <SelectItem value="name-asc">Sort A-Z</SelectItem>
              <SelectItem value="name-desc">Sort Z-A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="relative flex">
          <Input
            className="w-64 pl-8"
            placeholder="Search Property  location..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <GoSearch className="absolute top-3 left-2 " />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
        {searchedProperty.map((item, idx) => (
          <DynamicPropertyCard key={idx} property={item} />
        ))}
      </div>
    </div>
  )
}

export default PropertyList
