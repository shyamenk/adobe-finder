import Link from 'next/link'
import React from 'react'

const SiteFooter = () => {
  return (
    <footer className="px-4 py-8  shadow-top bg-slate-200 dark:bg-slate-900 ">
      <div className=" mx-auto flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row space-x-4 pr-3 sm:space-x-8">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full dark:dark:bg-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-5 w-5 rounded-full"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Privacy</Link>
          </ul>
        </div>
        <ul className="flex flex-wrap space-x-4 pl-3 sm:space-x-8">
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
        </ul>
      </div>
    </footer>
  )
}

export default SiteFooter
