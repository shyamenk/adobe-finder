import React from 'react'
import { Property } from '@prisma/client'
import InputList from '@/components/InputList'

interface Props {
  property: Property
}
const EditListingForm: React.FC<Props> = ({ property }) => {
  const initialFormData = {
    name: property.name,
    place: property.place,
    description: property.description,
    price: property.price,
    bed: property.bed,
    bathroom: property.bath,
    parking: property.parking,
    furnished: property.furnished,
    featured: property.isFeatured,
    imageUrls: property.imageUrls,
  }
  return <InputList formData={initialFormData} />
}

export default EditListingForm
