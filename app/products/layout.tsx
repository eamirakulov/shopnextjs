import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto pb-4 text-black dark:text-white">{children}</div>
      <Footer />
    </Suspense>
  );
}
