import Navbar from 'components/layout/navbar';
import TopBar from 'components/layout/topbar';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE
      }
    })
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <TopBar />
        <Suspense>
          <main className='pt-6'>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
