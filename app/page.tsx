import { NewsletterSection } from 'components/homepage/newsletter-section';
import { ProductsSection } from 'components/homepage/products-section';
import { SliderSection } from 'components/homepage/slider-section';
import Footer from 'components/layout/footer';
import { getProducts } from 'lib/shopify';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await getProducts({ sortKey: 'ID', reverse: false, query: '', first: 6 });
  return (
    <>
      <Suspense>
        <SliderSection />
        <ProductsSection products={products} />
        <NewsletterSection />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
