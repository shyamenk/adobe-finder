'use client'
import { FC } from 'react'
import { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeChanger'
import Link from 'next/link'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { MdOutlineRealEstateAgent } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import NavLink from '@/components/ui/NavLink'

const NavBar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const navigation = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Listing', href: '/listings' },
    { id: 3, name: 'Search', href: '/search' },
    { id: 4, name: 'Favourite', href: '/favourites' },
    { id: 5, name: 'About', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50  py-2 shadow-lg bg-slate-100 dark:bg-[#0a0f1c]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between px-2 py-4"
              >
                <MdOutlineRealEstateAgent className="mr-2 h-8 w-8" />
                <span className="text-lg font-semibold">
                  <span className="font-mono text-4xl text-sky-500">Adobe</span>{' '}
                  <span>Finder</span>
                </span>
              </Link>
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              {navigation.map((navLink) => (
                <NavLink
                  key={navLink.id}
                  href={navLink.href}
                  className="py-1 font-semibold "
                >
                  {navLink.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden items-center space-x-4 md:flex ">
            <ThemeButton />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-full border border-gray-400 px-4 py-1 font-semibold hover:border-none hover:bg-secondary hover:text-white dark:border-none dark:bg-secondary dark:text-primary">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <AiOutlineClose className="h-6 w-6 text-gray-500 hover:text-green-500" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6 text-gray-500 hover:text-green-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className=" md:hidden">
          <ul className="px-6 py-2">
            {navigation.map((navLink) => (
              <li
                key={navLink.id}
                className=" text-md block  py-2 font-semibold"
              >
                <Link href={navLink.href}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
export default NavBar
