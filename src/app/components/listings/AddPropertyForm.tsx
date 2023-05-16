'use client'
import Switch from '@/components/ui/Switch'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Property } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-hot-toast'

interface FormDataProps {
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
  [key: string]: string | number | boolean | string[]
}

const AddListingForm = () => {
  const { data: session } = useSession()

  const userId = session?.user.id

  const initailFormData = {
    name: '',
    type: '',
    place: '',
    description: '',
    price: 0,
    bed: 0,
    bath: 0,
    parking: false,
    furnished: false,
    isFeatured: false,
  }

  const initialImageData = ['', '', '', '', '']

  const [formData, setFormdata] = useState<FormDataProps>(initailFormData)
  const [imageUrls, setImageUrls] = useState(initialImageData)

  const handleImageUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newImageUrls = [...imageUrls]
    newImageUrls[index] = event.target.value
    setImageUrls(newImageUrls)
  }
  const handleSwitchChange = (switchName: keyof FormDataProps) => {
    setFormdata({
      ...formData,
      [switchName]: !formData[switchName],
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formData,
      [e.target.id]:
        e.target.type === 'number'
          ? parseFloat(e.target.value)
          : e.target.value,
    })
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const toastId = toast.loading('Loading...')
    try {
      const response = await fetch('/api/listings/addListings', {
        method: 'POST',
        body: JSON.stringify({ formData, userId, imageUrls }),
      })
      const property = (await response.json()) as Property
      console.log(property)
      toast.success('Succesfully Added', {
        id: toastId,
      })
      setFormdata(initailFormData)
      setImageUrls(['', '', '', '', ''])
    } catch (error) {
      toast.error('Something went wrong....')
      console.error(error)
    }
  }

  return (
    <section className="md:mx-auto w-full sm:p-6 pb-18  ">
      <h1 className="px-6 text-3xl">Add Listings</h1>
      <form
        onSubmit={submitHandler}
        className="ng-untouched ng-pristine ng-valid container mx-auto flex flex-col space-y-28 overflow-hidden grow"
      >
        <fieldset className="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm">
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="type">Category</Label>
              <Select
                defaultValue="Apartment"
                onValueChange={(value) =>
                  setFormdata({ ...formData, type: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Type</SelectLabel>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condoms">Condoms</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="place">Place</Label>
              <Input
                type="text"
                id="place"
                value={formData.place}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full ">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                value={formData.price.toString()}
                onChange={handleChange}
                placeholder="Price"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="bed">Beds</Label>
              <Input
                type="number"
                id="bed"
                value={formData.bed.toString()}
                onChange={handleChange}
                placeholder="Beds"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="bathroom">Baths</Label>

              <Input
                type="number"
                id="bath"
                value={formData.bath.toString()}
                onChange={handleChange}
                placeholder="Baths"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="parking">Parking</Label>
              <Switch
                selected={formData.parking}
                onChange={() => handleSwitchChange('parking')}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="furnished">Furnished</Label>
              <Switch
                selected={formData.furnished}
                onChange={() => handleSwitchChange('furnished')}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="isFeatured">Featured</Label>
              <Switch
                selected={formData.isFeatured}
                onChange={() => handleSwitchChange('isFeatured')}
              />
            </div>
            <div className="col-span-3">
              {imageUrls.map((url, index) => (
                <Label key={index} className="pb-2">
                  Image URL {index + 1}:
                  <Input
                    type="text"
                    name={`imageUrl${index}`}
                    id={`imageUrl${index}`}
                    value={url}
                    onChange={(event) => handleImageUrlChange(event, index)}
                  />
                </Label>
              ))}
            </div>

            <div className="col-span-full">
              <Button
                variant={'outline'}
                size={'lg'}
                className="bg-tertiary text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground"
              >
                Submit
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default AddListingForm
