'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavDropDown } from '@/components/layout/header';
import { Url } from 'next/dist/shared/lib/router/router';
import { ServicesDropDownContent } from './ServicesDropDown.content';
import { ToolsDropDownContent } from './ToolsDropDown.content';

type NavLinkRoute = {
  name: string;
  href: Url;
};

const navLinkRoutes: NavLinkRoute[] = [
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
];

export function NavItems() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  const HandleToolsModal = () => {
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
    setIsToolsOpen(!isToolsOpen);
  };

  const HandleServicesModal = () => {
    if (isToolsOpen) {
      setIsToolsOpen(false);
    }
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className='flex sm:flex-row flex-col space-y-4 sm:space-y-0 items-center justify-center space-x-4  '>
      {/* Links */}
      {navLinkRoutes.map(({ name, href }) => (
        <Link
          href={href}
          className={` font-medium inline-flex items-center gap-1 '
          }`}
          key={name + href}
          onClick={() => console.log(path)}
        >
          {' '}
          <button
            className={`text-sm  ${
              path === href
                ? 'font-bold'
                : 'text-foreground hover:text-foreground nav-link'
            }`}
          >
            {name}
          </button>
        </Link>
      ))}

      <span>
        <button
          onClick={HandleToolsModal}
          className='flex items-center text-sm font-medium nav-link'
        >
          Tools
          {isToolsOpen ? (
            <ChevronUp className='ml-1 h-4 w-4' />
          ) : (
            <ChevronDown className='ml-1 h-4 w-4' />
          )}
        </button>

        <AnimatePresence>
          {isToolsOpen && (
            <NavDropDown ref={menuRef}>
              <ToolsDropDownContent />
            </NavDropDown>
          )}
        </AnimatePresence>
      </span>

      {/* Services */}
      <span>
        <button
          onClick={HandleServicesModal}
          className='flex items-center text-sm font-medium nav-link'
        >
          Services
          {isServicesOpen ? (
            <ChevronUp className='ml-1 h-4 w-4' />
          ) : (
            <ChevronDown className='ml-1 h-4 w-4' />
          )}
        </button>

        <AnimatePresence>
          {isServicesOpen && (
            <NavDropDown ref={menuRef} className='lg:flex-row-reverse'>
              <ServicesDropDownContent />
            </NavDropDown>
          )}
        </AnimatePresence>
      </span>
    </nav>
  );
}
