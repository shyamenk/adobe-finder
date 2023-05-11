'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface FormDataProps {
  name: string
  place: string
  description: string
  price: number
  bed: number
  bathroom: number
  parking: boolean
  furnished: boolean
  featured: boolean
  imageUrls: string[]
}

interface Props {
  formData: FormDataProps
}
const InputList = ({ formData: initialFormData }: Props) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, checked, value } = e.target
    const newValue =
      type === 'checkbox' ? checked : type === 'number' ? +value : value

    setFormData({ ...formData, [id]: newValue })
  }

  return (
    <div className="col-span-full">
      <fieldset>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="place">Place</Label>
          <Input
            type="text"
            id="place"
            value={formData.place}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div>
          <Label htmlFor="bed">Beds</Label>
          <Input
            type="number"
            id="bed"
            value={formData.bed}
            onChange={handleChange}
            placeholder="Beds"
          />
        </div>
        <div>
          <Label htmlFor="bathroom">Bathrooms</Label>
          <Input
            type="number"
            id="bathroom"
            value={formData.bathroom}
            onChange={handleChange}
            placeholder="Bathrooms"
          />
        </div>
        <div>
          <Label htmlFor="parking">Parking</Label>
          <Input
            type="checkbox"
            id="parking"
            checked={formData.parking}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="furnished">Furnished</Label>
          <Input
            type="checkbox"
            id="furnished"
            checked={formData.furnished}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="featured">Featured</Label>
          <Input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
        </div>
        {formData.imageUrls.map((image, index) => (
          <div key={index}>
            <Label htmlFor={`imageUrl${index}`}>Image URL {index}</Label>
            <Input
              type="text"
              id={`imageUrl${index}`}
              value={image}
              onChange={handleChange}
            />
          </div>
        ))}
        {/* include Button UI component here */}
        <button type="submit">Update Listing</button>
      </fieldset>
    </div>
  )
}

export default InputList
