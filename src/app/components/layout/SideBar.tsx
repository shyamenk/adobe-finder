'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiSettings4Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi'
import { RxChevronLeft } from 'react-icons/rx'

const Sidebar = () => {
  const menus = [
    { name: 'Add Property', link: '/listings/add', icon: MdOutlineDashboard },
    { name: 'Edit Property', link: '/', icon: AiOutlineUser },
    { name: 'View Property', link: '/', icon: FiMessageSquare },
    { name: 'analytics', link: '/', icon: TbReportAnalytics, margin: true },
    { name: 'File Manager', link: '/', icon: FiFolder },
    { name: 'Cart', link: '/', icon: FiShoppingCart },
    { name: 'Saved', link: '/', icon: AiOutlineHeart, margin: true },
    { name: 'Setting', link: '/', icon: RiSettings4Line },
  ]
  const [open, setOpen] = useState(false)
  return (
    <section className="flex gap-6">
      <div
        className={`overflow-auto   ${
          open ? 'w-72' : 'w-16'
        } duration-500  px-4`}
      >
        <div className="py-3 flex justify-end">
          {open && (
            <h1 className="pr-24 text-2xl font-semibold text-tertiary">
              Dashboard
            </h1>
          )}
          <RxChevronLeft
            size={26}
            className={` cursor-pointer right-3 top-9 w-7  rounded-full  ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm  gap-3.5 font-medium p-2 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sidebar
