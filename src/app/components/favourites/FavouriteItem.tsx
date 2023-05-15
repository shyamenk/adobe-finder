import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useAuth } from '@clerk/nextjs'

type Props = {
  propertyId: string
}

const FavouriteItem = ({ propertyId }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const { userId } = useAuth()

  const handleFavouriteToggle = async () => {
    setIsFavourite(!isFavourite)

    try {
      if (!isFavourite) {
        const response = await fetch('/api/favourite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ propertyId }),
        })
        const data = await response.json()
        console.log(data)
      } else {
        console.log(propertyId)
        const response = await fetch(`/api/favourite/${propertyId}`, {
          method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.error('Failed to toggle favourite:', error)
    }
  }

  return (
    <>
      {userId && (
        <div className="z-30 absolute top-3 right-6 rounded-full ">
          <Button
            onClick={handleFavouriteToggle}
            variant="ghost"
            className={clsx(
              'h-10 w-10 bg-gray-400/60 dark:bg-slate-900/60 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-900 hover:bg-red-500 dark:hover:bg-red-500 transition-colors duration-300',
              {
                'bg-red-500 dark:bg-red-500': isFavourite,
                'cursor-default': !isFavourite,
              }
            )}
          >
            <AiFillHeart className="absolute top-2 right-2 w-6 h-6" />
          </Button>
        </div>
      )}
    </>
  )
}

export default FavouriteItem
