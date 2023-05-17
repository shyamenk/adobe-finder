'use client'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import React, { useState, useEffect, useTransition } from 'react'
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
  propertyId: string
}

const FavouriteItem = ({ propertyId }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false)

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const { data: session } = useSession()

  const isMutating = isFetching || isPending

  useEffect(() => {
    const fetchFavourites = async () => {
      setIsFetching(true)
      try {
        const response = await fetch(`/api/favourite`)
        const data = await response.json()
        const favorites = data.favorites || []
        const isFavourite = favorites?.some(
          (favorite: { propertyId: string }) =>
            favorite.propertyId === propertyId
        )

        setIsFavourite(isFavourite)
      } catch (error) {
        console.error('Failed to fetch favourites:', error)
      }
      setIsFetching(false)
    }
    fetchFavourites()
  }, [propertyId])

  const handleAddToFavorites = async () => {
    setIsFavourite((prevIsFavourite) => !prevIsFavourite)
    setIsFetching(true)
    const toastId = toast.loading('Loading...')
    try {
      const res = await fetch('/api/favourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyId }),
      })
      const data = await res.json()
      toast.success(data.message, {
        id: toastId,
      })
    } catch (error) {
      console.error('Error updating favorites', error)
      toast.error('Error updating favorites')
    }
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }
  if (!session) {
    return null
  }
  return (
    <>
      <div className="z-30 absolute top-3 right-6 rounded-full ">
        <Button
          onClick={handleAddToFavorites}
          variant="ghost"
          className={clsx(
            'h-10 w-10 bg-gray-400/60 dark:bg-slate-900/60 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-900 hover:bg-red-500 dark:hover:bg-red-500 transition-colors duration-300',
            {
              'bg-red-500 dark:bg-red-500': isFavourite,
              'cursor-pointer': !isFavourite,
            }
          )}
          disabled={isPending}
          style={{ opacity: !isMutating ? 1 : 0.7 }}
        >
          {isPending ? (
            <div className="animate-spin h-6 w-6">
              <div className="h-2.5 w-2.5 bg-current rounded-full"></div>
            </div>
          ) : (
            <Heart className="absolute top-2 right-2 w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  )
}

export default FavouriteItem
