'use client'

import { Input } from '@/components/ui/input'

type Props = {
  fileChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FileUpload({ fileChange }: Props) {
  return (
    <div>
      <Input id="file" type="file" multiple onChange={fileChange} />
    </div>
  )
}
