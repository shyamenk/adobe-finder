import Spinner from '@/components/ui/Spinner'
import { Favorite, Property } from '@prisma/client'
import dynamic from 'next/dynamic'

const DynamicFavouriteCard = dynamic(
  () => import('@/components/favourites/FavouriteCard'),
  {
    loading: () => <Spinner />,
  }
)
type FavoriteWithProperty = Favorite & {
  Property: Property | null
}

type FavoriteListProps = {
  favouriteProperties: FavoriteWithProperty[]
}
const FavouriteList = ({ favouriteProperties }: FavoriteListProps) => {
  return (
    <section className="grid grid-col-1 gap-6 md:grid-col-2 lg:grid-cols-3 px-10 py-10 mx-auto">
      {favouriteProperties.map((favourite, idx) => (
        <DynamicFavouriteCard key={idx} favourite={favourite} />
      ))}
    </section>
  )
}

export default FavouriteList
