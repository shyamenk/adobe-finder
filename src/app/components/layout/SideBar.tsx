'use client';

import Link from 'next/link';
import { BsFillHouseAddFill, BsViewStacked } from 'react-icons/bs';
// import { AiFillSetting } from 'react-icons/ai';
// import { BiHelpCircle } from 'react-icons/bi';

const Sidebar = () => {
  const navigation = [
    {
      href: '/listings/add',
      name: 'Add Property',
      icon: <BsFillHouseAddFill />,
    },
    {
      href: '#',
      name: 'View Property',
      icon: <BsViewStacked />,
    },
  ];

  // const navsFooter = [
  //   {
  //     href: '#',
  //     name: 'Help',
  //     icon: <BiHelpCircle />,
  //   },
  //   {
  //     href: '#',
  //     name: 'Settings',
  //     icon: <AiFillSetting />,
  //   },
  // ];

  return (
    <>
      <nav className="h-screen sidebar-dark-mode shadow-lg sm:w-80 divide-x-2 ">
        <div className="flex  flex-col px-4">
          <div className="overflow-auto">
            <h1 className="py-4 text-3xl font-semibold text-[#374955] dark:text-secondary ">
              Dashboard
            </h1>
            <ul className="text-md flex-1 font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center  gap-x-2 rounded-lg p-2  text-mode-dark duration-150 dark:text-mode-light"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li></li>
            </ul>
            <div className="mt-2 border-t pt-2">
              {/* <ul className="text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-x-2 rounded-lg p-2 text-gray-100  duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
