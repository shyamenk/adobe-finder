'use client';

import ThemeButton from '@/utils/ThemeChanger';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

const NavBar: FC = () => {
  const [state, setState] = useState(false);

  const authenticated = false;
  const navigation = [
    { title: 'Listing', path: '/' },
    { title: 'Favourite', path: '/favorites' },
    { title: 'Buy', path: 'buy' },
    { title: 'Sell', path: 'sell' },
    { title: 'Contact', path: 'contact' },
  ];

  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target?.closest('.menu-btn')) setState(false);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b dark:border-none bg-[#fffcf9] dark:bg-[#131c2d] text-mode-dark border-b-1  h-20  dark:text-mode-light pb-5 md:text-sm">
      <div className="items-center max-w-screen-xl mx-auto gap-x-14 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <Link href="/">
            <div className="flex items-center gap-2">
              <MdOutlineRealEstateAgent className="w-10 h-10 text-secondary" />
              <h2 className="text-2xl font-extrabold text-transparent text-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-2xl">
                Adobe Finder
              </h2>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 menu-btn hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`  flex-1 items-center  md:flex ${
            state ? 'block px-2 mt-2' : 'hidden '
          } `}
        >
          <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className=" hover:text-gray-900">
                  <Link
                    href={item.path}
                    className="block font-sans text-lg font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="items-center justify-end flex-1 mt-6 space-y-6 gap-x-6 md:flex md:space-y-0 md:mt-0">
            <ThemeButton />
            {authenticated ? (
              <button
                type="button"
                className="font-semibold text-gray-800 rounded-full bg-link "
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="px-8 py-2 font-semibold rounded-full bg-primary hover:bg-secondary text-accent dark:text-primary dark:bg-secondary"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
