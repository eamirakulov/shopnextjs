import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import Filter from 'components/filter';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { extractProductColors } from 'lib/utils';
import { getCollections } from 'lib/shopify';

export const metadata = {
  title: 'Products',
  description: 'Products in the store.'
};

export async function ProductsSection({ products }: { products: Product[] }) {
  const allColors = extractProductColors(products);
  const collections = await getCollections();
  console.log(collections);

  return (
    <section className="lg:py-18 container mx-auto py-14 md:px-4 md:py-14 xl:px-0">
      <Filter colors={allColors} collections={collections} />
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
      <div className="text-center">
        <Link href={'/products'} legacyBehavior>
          <a className="btn-primary-outline !mt-[64px] max-w-[250px] dark:border-white">Shop All</a>
        </Link>
      </div>
    </section>
  );
}
