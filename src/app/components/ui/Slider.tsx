import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

interface Props {
  imageUrls: string | string[]
}

const Slider = ({ imageUrls }: Props) => {
  const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls]
  return (
    <div className="h-80 sm:h-64 md:h-[400px] w-[800]">
      <Carousel>
        {urls.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt="images-cons"
            width={1000}
            height={800}
            className="h-400 w-900"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
