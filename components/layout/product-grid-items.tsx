import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  const isTrending = true;
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            {isTrending && (
              <>
                <div className="text-md absolute -right-2 top-6 bg-[#11151C] px-2 py-1 uppercase text-white lg:top-8">
                  <span className="bottom-mark absolute right-[0.30rem] top-[1.70rem] -z-20 h-4 w-2 rotate-45 bg-[#11151C]"></span>
                  <span>Trending</span>
                </div>
              </>
            )}
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
