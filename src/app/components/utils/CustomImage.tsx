'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  onClick?: () => void
}
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const CustomImage = ({ src, alt, width, height }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      loading="lazy"
      blurDataURL={src}
      className={cn(
        'duration-700 ease-in-out rounded-lg ',
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default CustomImage
