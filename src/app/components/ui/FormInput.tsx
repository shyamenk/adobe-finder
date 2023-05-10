import React from 'react'
type Props = {
  label: string
  type: string
  id: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const FormInput = ({ label, type, id, value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="place" className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full mt-1 border px-3 py-2 border-gray-300 dark:border-mode-text dark:text-gray-300 bg-transparent shadow-sm rounded-lg focus:border-gray-500 dark:focus:border-blue-500 focus:ring-gray-500 dark:focus:ring-blue-500"
      />
    </div>
  )
}

export default FormInput
