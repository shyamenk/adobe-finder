import { prisma } from '@/config/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/api/auth/[...nextauth]/route'
import FavouriteList from '@/components/favourites/FavouriteList'
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
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/')
  }

  const userId = session?.user?.id

  const favouriteProperties = await getfavourites(userId || '')

  return (
    <div
      className={`py-10  ${
        favouriteProperties.length ? 'overflow-auto' : 'h-screen'
      }`}
    >
      <h1 className="text-sky-500 pt-6 text-3xl px-10">Your Favourites</h1>
      <FavouriteList favouriteProperties={favouriteProperties} />
    </div>
  )
}

export default FavouritePage
