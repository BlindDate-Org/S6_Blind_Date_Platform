import React, { useState, Fragment } from 'react'
import { Bars3Icon, XMarkIcon, UserIcon, AcademicCapIcon, HomeIcon, ChatBubbleBottomCenterTextIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";
import Logo from './Logo'
import { useLocation } from 'react-router-dom';

const Navlinks = [
  {
    link: "/",
    name: 'Home',
    icon: <HomeIcon />
  },
  {
    link: "/chat",
    name: 'Chat',
    icon: <ChatBubbleBottomCenterTextIcon />
  },
  {
    link: "/question",
    name: 'Q&A',
    icon: <AcademicCapIcon />
  },
  {
    link: "/blog",
    name: 'Blog',
    icon: <NewspaperIcon />
  },
];

const Navbar = () => {
  const [showDropDownNav, setShowDropDownNav] = useState(false);
  const currentPage = useLocation();
  return (
    <>
      <nav className='flex items-center justify-between w-11/12 p-7 h-[10vh] '>
        <div className='w-auto flex'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        {/* Desktop navbar links */}
        <ul className='hidden lg:flex md:flex w-auto  space-x-16 items-center justify-between '>
          {Navlinks.map((link, _) => (
            <Link key={_} to={link.link} className={`${currentPage.pathname === link.link ? 'text-cyan-500' : ''} navlink`}>{link.icon} {link.name}</Link>
          ))}
        </ul>
        {/* Mobile navbar links*/}
        <Menu as="div" className="relative lg:hidden md:hidden">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md ">
              {!showDropDownNav && <Bars3Icon className='lg:hidden md:hidden w-10' onClick={() => setShowDropDownNav(prev => !prev)} />}
              {showDropDownNav && <XMarkIcon className='lg:hidden md:hidden w-10' onClick={() => setShowDropDownNav(prev => !prev)} />}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {Navlinks.map((link, _) => (
                  <Menu.Item key={_}><Link to={link.link} onClick={() => { setShowDropDownNav(false) }} className='navlink-mobile'>{link.name}</Link></Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
      <hr className='border-t-1 border-gray-500 w-11/12 pb-3' />
    </>
  )
}

export default Navbar






