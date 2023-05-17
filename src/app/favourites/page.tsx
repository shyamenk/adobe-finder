import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/api/auth/[...nextauth]/route'
import FavouriteList from '@/components/favourites/FavouriteList'
import { redirect } from 'next/navigation'
import { prisma } from '@/config/prisma'

// export const revalidate = 0

async function getfavourites() {
  const session = await getServerSession(authOptions)
  const favorites = await prisma.favorite.findMany({
    where: { userId: session?.user?.id },
    include: { Property: true },
  })
  return favorites
}

const FavouritePage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/')
  }

  const favouriteProperties = await getfavourites()

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
