import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import logo from '../../../images/logo.svg';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const menu = [
    {
      title: 'New',
      path: '/products'
    },
    {
      title: 'All',
      path: '/products'
    }
  ];
  return (
    <div className="container">
      <nav className="relative flex items-center justify-between border-b pt-6 pb-6 dark:border-[#11151C] shadow-sm">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full gap-4 md:w-1/3">
            <Link
              href="/"
              aria-label="Go back home"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <Image
                src={logo}
                alt="logo"
                className="main-logo xs:max-w-[150px] md:max-w-[200px] dark:invert"
                priority={true}
              />
            </Link>
            {menu.length ? (
              <ul className="menu text-md hidden gap-8 md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-[#6E7074] underline underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {/* <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div> */}
          <div className="flex justify-end md:w-1/3">
            {/* <OpenCart /> */}
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </div>
  );
}
