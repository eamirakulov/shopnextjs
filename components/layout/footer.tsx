import Link from 'next/link';

import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import { FormEvent } from 'react';
import logo from "../../images/footer-logo.svg";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  const handleSubmitSubscribe = (event: FormEvent<HTMLFormElement>) => {
    console.log(event, "event");
  }
  return (
    <footer className="text-white dark:text-neutral-400 bg-[#11151C]">
      <div className="container mx-auto w-full py-12 text-sm dark:border-neutral-700 md:px-4 xl:px-0">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <div className='footer-widget'>
            <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
              <Image src={logo} alt='logo' className='main-logo xs:max-w-[150px] md:max-w-[200px]' priority={true} />
              {/* <LogoSquare size="sm" />
              <span className="uppercase">{SITE_NAME}</span> */}
            </Link>
          </div>
          <div className='footer-widget'>
            <h3 className='mb-7 text-2xl'>Company</h3>
            <ul>
              <li className='mb-2'>
                <Link href={'/about-us'} legacyBehavior>
                  <a className='text-md hover:underline py-2'>About us</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href={'/blog'} legacyBehavior>
                  <a className='text-md hover:underline py-2'>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-widget'>
            <h3 className='mb-7 text-2xl'>Support</h3>
            <ul>
              <li className='mb-2'>
                <Link href={'/terms-of-service'} legacyBehavior>
                  <a className='text-md hover:underline py-2'>Terms of service</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href={'/privacy-policy'} legacyBehavior>
                  <a className='text-md hover:underline py-2'>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-widget'>
            <h3 className='mb-7 text-2xl'>Subscribe now</h3>
            <form className='relative'>
              <input className="shadow appearance-none bg-transparent w-full py-4 text-white border-b 
              leading-tight focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:shadow-none" id="email" type="email" placeholder="Enter your email" />
              <button type='submit' className='p-0 bg-transparent border-0 absolute block right-2 top-1/2 translate-y-[-50%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        {/* <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex items-center gap-2 text-lg hover:text-black dark:hover:text-neutral-300 md:text-sm"
            aria-label="Github Repository"
            href="https://github.com/vercel/commerce"
          >
            <GitHubIcon className="h-6" />
            <p>Source</p>
          </a>
        </div> */}
      </div>
      <div className="border-t border-[#D0D0D0] py-6 text-sm dark:border-neutral-700">
        <div className="container mx-auto flex w-full flex-col items-center xs:gap-4 gap-1 md:flex-row md:gap-0 md:px-4 xl:px-0">
          <p>Built by Opascope &#128640;</p>
          <p className='xs:text-center ml-auto'>
            &copy; {copyrightDate} {copyrightName}
            {/* {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved. */}
            PBCT LLC dba Opascope. All rights reserved
          </p>
          <hr className="mx-2 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p><Link href={'/privacy'} className='cursor-pointer'>Privacy Policy</Link></p>
          <hr className="mx-2 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p><Link href={'/login'} className='cursor-pointer'>Login</Link></p>
        </div>
      </div>
    </footer>
  );
}
