'use client';
import FormInput from '@/components/ui/FormInput';
import Switch from '@/components/ui/Switch';
import React, { useState } from 'react';
interface FormDataProps {
  name: string;
  place: string;
  description: string;
  price: number;
  bed: number;
  bathroom: number;
  [key: string]: string | number;
}
interface ToggleState {
  parking: boolean;
  furnished: boolean;
  featured: boolean;
  [key: string]: boolean;
}
const AddListingForm = () => {
  const [formData, setFormdata] = useState<FormDataProps>({
    name: '',
    place: '',
    description: '',
    price: 0,
    bed: 0,
    bathroom: 0,
  });
  const [toggle, setTogglee] = useState<ToggleState>({
    parking: false,
    furnished: false,
    featured: false,
  });
  const handleSwitchChange = (switchName: string) => {
    setTogglee({ ...toggle, [switchName]: !toggle[switchName] });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="h-screen mx-auto max-w-7xl p-6  dark:bg-[#172034]">
      <h1 className="px-6 text-3xl text-mode-text dark:text-secondary">
        Add Listings
      </h1>
      <form
        onSubmit={submitHandler}
        className="ng-untouched ng-pristine ng-valid container mx-auto flex flex-col space-y-28 overflow-hidden grow"
      >
        <fieldset className="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm">
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <FormInput
                type="text"
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <FormInput
                type="text"
                id="place"
                label="Place"
                value={formData.place}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full">
              <FormInput
                type="text"
                id="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <FormInput
                type="number"
                id="price"
                label="Price"
                value={formData.price.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <FormInput
                type="number"
                id="bed"
                label="Bed Rooms"
                value={formData.bed.toString()}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <FormInput
                type="number"
                id="bathroom"
                label="Bath Rooms"
                value={formData.bathroom.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="parking" className="text-sm">
                Parking
              </label>
              <Switch
                selected={toggle.parking}
                onChange={() => handleSwitchChange('parking')}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="furnished" className="text-sm">
                Furnished
              </label>
              <Switch
                selected={toggle.furnished}
                onChange={() => handleSwitchChange('furnished')}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="featured" className="text-sm">
                Featured
              </label>
              <Switch
                selected={toggle.featured}
                onChange={() => handleSwitchChange('featured')}
              />
            </div>
            <div className="col-span-1">
              <button className="w-full btn-primary mt-6">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddListingForm;
