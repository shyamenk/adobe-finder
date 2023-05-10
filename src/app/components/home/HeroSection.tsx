import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
const HeroSection: FC = () => {
  return (
    <section>
      <div className=" container mx-auto flex flex-col justify-center p-6  sm:py-12 md:px-10 lg:flex-row lg:justify-between lg:py-24">
        <div className="xl:h-112 2xl:h-128 mt-4 flex h-72 items-center justify-center pb-10 sm:h-80 md:pb-8 lg:mt-0 lg:h-96">
          <Image
            width={600}
            height={600}
            alt="hero"
            src="/images/hero/hero.svg"
            className="lg:full "
          />
        </div>

        <div className=" flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Find Your
            <span className="text-mode-text dark:text-sky-400 text-gray-600">
              {' '}
              Dream Home{' '}
            </span>
            Today
          </h1>
          <p className=" mt-6 text-lg sm:mb-12 md:mb-6">
            With Adobe Finder, you can easily search for properties that meet
            your needs and preferences. Whether you&apos;re looking for a cozy
            apartment in the city or a spacious house in the suburbs, we&apos;ve
            got you covered.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Find Now !
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
