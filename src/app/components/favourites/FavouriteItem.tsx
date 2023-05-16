'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react'

type Props = {
  propertyId: string
}

const FavouriteItem = ({ propertyId }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    const fetchFavourites = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/favourite/${propertyId}`)
        const data = await response.json()
        setIsFavourite(data.isFavourite)
      } catch (error) {
        console.error('Failed to fetch favourites:', error)
      }
      setIsLoading(false)
    }

    fetchFavourites()
  }, [propertyId, session])

  const handleFavouriteToggle = async () => {
    setIsFavourite(!isFavourite)

    setIsLoading(true)

    try {
      if (!isFavourite) {
        const response = await fetch('/api/favourite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ propertyId }),
        })
        if (response.ok) {
          const data = await response.json()
          setIsFavourite(true)
          toast.success(data.message)
        } else {
          const data = await response.json()
          toast.error(data.message)
        }
      } else {
        const response = await fetch(`/api/favourite/${propertyId}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setIsFavourite(false)
          toast.success('Removed from favourites')
        }
      }
    } catch (error) {
      console.error('Failed to toggle favourite:', error)
      toast.error('Failed to add favourites')
    }
    setIsLoading(false)
  }

  return (
    <>
      {session && (
        <div className="z-30 absolute top-3 right-6 rounded-full ">
          <Button
            onClick={handleFavouriteToggle}
            variant="ghost"
            className={clsx(
              'h-10 w-10 bg-gray-400/60 dark:bg-slate-900/60 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-900 hover:bg-red-500 dark:hover:bg-red-500 transition-colors duration-300',
              {
                'bg-red-500 dark:bg-red-500': isFavourite,
                'cursor-pointer': !isFavourite,
              }
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin h-6 w-6">
                <div className="h-2.5 w-2.5 bg-current rounded-full"></div>
              </div>
            ) : (
              <Heart className="absolute top-2 right-2 w-6 h-6" />
            )}
          </Button>
        </div>
      )}
    </>
  )
}

export default FavouriteItem
