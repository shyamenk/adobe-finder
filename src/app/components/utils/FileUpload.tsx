'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

type Props = {
  fileChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FileUpload({ fileChange }: Props) {
  return (
    <div>
      <Label htmlFor="picture">Picture</Label>
      <Input id="file" type="file" multiple onChange={fileChange} />
    </div>
  )
}
