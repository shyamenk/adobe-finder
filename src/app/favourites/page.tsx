import { currentUser } from '@clerk/nextjs'

import FavouriteList from '@/components/favourites/FavouriteList'
import { prisma } from '@/config/prisma'
import { redirect } from 'next/navigation'

async function getfavourites(userId: string) {
  const data = prisma.favorite.findMany({
    where: {
      userId,
    },
    include: {
      Property: true,
    },
  })
  return data
}

const FavouritePage = async () => {
  const user = await currentUser()
  if (!user) return <div>Not logged in</div>
  if (!user) redirect('/')

  const favouriteProperties = await getfavourites(user.id)

  return (
    <div className=" py-10">
      <h1 className="text-sky-500 pt-6 text-3xl px-10">Your Favourites</h1>
      <FavouriteList favouriteProperties={favouriteProperties} />
    </div>
  )
}

export default FavouritePage
