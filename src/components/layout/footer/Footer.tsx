import { footerLinks, socialLinks } from './utils/Footer.const';
import { Logo } from '@/components/layout/Logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='relative bg-card/50'>
      <div className='absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-secondary-orange  to-transparent '></div>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer */}
        <div className='py-16 sm:py-20'>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
            {/* Brand Column */}
            <div className='col-span-2'>
              <Logo />
              <p className='text-card-foreground/70 mb-6 max-w-md mx-auto lg:mx-0'>
                Empowering businesses with innovative digital solutions. We help
                you grow through data-driven strategies and cutting-edge
                technology.
              </p>
              <div className='space-y-2 mb-6 flex flex-col items-center lg:items-start'>
                <p className='text-card-foreground/70 flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                  6175 NW 186th Street, Hialeah, FL 33015
                </p>
                <p className='text-card-foreground/70 flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                  +1 (786) 945-7843
                </p>
              </div>
              <div className='flex items-center justify-center lg:justify-start gap-4'>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    href={href}
                    className='group/social relative w-8 h-8 flex items-center justify-center rounded-md text-primary transition-all duration-300 hover:scale-105 overflow-hidden ring-1 ring-gradient-to-br from-blue-300 via-primary to-secondary-blue'
                    aria-label={label}
                    key={label}
                  >
                    <div className='relative z-10 w-full h-full flex items-center justify-center '>
                      <Icon className='w-4 h-4' />
                    </div>
                    <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/social:duration-1000 group-hover/social:[transform:skew(-12deg)_translateX(100%)]'>
                      <div className='relative h-full w-6 bg-white/70'></div>
                    </div>
                    <div className='absolute inset-0 rounded-md bg-gradient-to-br from-blue-300 via-primary to-blue-700 opacity-20'></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}

            <div className='space-y-6 text-center lg:text-left'>
              <h3 className='text-sm font-semibold capitalize tracking-wider text-center lg:text-left'>
                Company
              </h3>
              <ul className='space-y-4 flex flex-col items-center lg:items-start'>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='nav-link'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-6 text-center lg:text-left  '>
              <h3 className='text-sm font-semibold  tracking-wider text-center lg:text-left capitalize '>
                Services
              </h3>
              <ul className='space-y-4 flex flex-col items-center lg:items-start'>
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='nav-link'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-6 text-center lg:text-left '>
              <h3 className='text-sm font-semibold capitalize tracking-wider text-center lg:text-left'>
                Tools
              </h3>
              <ul className='space-y-4 flex flex-col items-center lg:items-start'>
                {footerLinks.tools.map((link) => (
                  <li className='group flex items-center' key={link.label}>
                    <Link href={link.href} className='nav-link'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-card text-center'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <div className='text-sm text-card-foreground/70'>
              © {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
              {footerLinks.legal.map((link) => (
                <Link href={link.href} className='nav-link' key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
