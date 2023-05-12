'use client'
import Switch from '@/components/ui/Switch'
import FileUpload from '@/components/utils/FileUpload'
import React, { useState } from 'react'
import { useAuth } from '@clerk/nextjs'
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

interface FormDataProps {
  name: string
  type: string
  place: string
  description: string
  price: number
  bed: number
  bathroom: number
  parking: boolean
  furnished: boolean
  featured: boolean
  [key: string]: string | number | boolean | File
}

const AddListingForm = () => {
  const { userId } = useAuth()

  const initailFormData = {
    name: '',
    type: '',
    place: '',
    description: '',
    price: 0,
    bed: 0,
    bathroom: 0,
    parking: false,
    furnished: false,
    featured: false,
  }

  const [formData, setFormdata] = useState<FormDataProps>(initailFormData)

  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
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
    const formDataWithFiles = new FormData()
    formDataWithFiles.append('userId', userId as string)
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        formDataWithFiles.append(key, value.toString())
      } else {
        formDataWithFiles.append(key, String(value))
      }
    })

    files.forEach((file, index) => {
      formDataWithFiles.append(`file${index}`, file)
    })
    try {
      const response = await fetch('/api/listings/addListings', {
        method: 'POST',
        body: formDataWithFiles,
      })
      const property = (await response.json()) as Property
      console.log(property)
      setFormdata(initailFormData)
    } catch (error) {
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
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Condoms">Condoms</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Duplex">Duplex</SelectItem>
                    <SelectItem value="Bungalow">Bungalow</SelectItem>
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
            <div className="col-span-full">
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
                id="bathroom"
                value={formData.bathroom.toString()}
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
              <Label htmlFor="featured">Featured</Label>
              <Switch
                selected={formData.featured}
                onChange={() => handleSwitchChange('featured')}
              />
            </div>
            <div className="col-span-full">
              <FileUpload fileChange={handleFileChange} />
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
