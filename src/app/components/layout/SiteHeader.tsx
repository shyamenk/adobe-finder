'use client';
import { FC } from 'react';
import { useState } from 'react';
import ThemeButton from '@/utils/ThemeChanger';
import Link from 'next/link';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client';

import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
// import { FaUserCircle } from 'react-icons/fa';

const NavBar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigation = [
    { id: 1, name: 'Home', link: './' },
    { id: 2, name: 'Search', link: '/search' },
    { id: 3, name: 'Favourite', link: '/favourites' },
    { id: 4, name: 'About', link: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-mode-light bg-white bg-opacity-95 py-2 text-mode-dark shadow-lg dark:bg-mode-dark dark:bg-opacity-95 dark:text-mode-light">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between px-2 py-4"
              >
                <MdOutlineRealEstateAgent className="mr-2 h-8 w-8 text-secondary " />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <span className="font-mono text-4xl">Adobe</span>{' '}
                  <span className="text-secondary">Finder</span>
                </span>
              </Link>
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              {navigation.map((navLink) => (
                <Link
                  key={navLink.id}
                  href={navLink.link}
                  className="py-1 font-semibold "
                >
                  {navLink.name}
                </Link>
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
                <button className='dark:text-primary"> rounded-full border border-gray-400 px-4 py-1 font-semibold hover:border-none hover:bg-secondary hover:text-white dark:border-none dark:bg-secondary'>
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
                <Link href={navLink.link}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
