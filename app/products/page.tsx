import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Filter from 'components/filter';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import FilterItemDropdown from 'components/layout/search/filter/dropdown';
import { breadCrumbArr, sortingProducts } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';

export const runtime = 'edge';

export const metadata = {
  title: 'Products',
  description: 'All Products in the store.'
};

export type BreadCrumbItemType = {
  name?: string;
  href: string;
};

export default async function ProductsPage() {
  const products = await getProducts({ sortKey: 'ID', reverse: false, query: '', first: 6 });
  const resultsText = products.length > 1 ? 'results' : 'result';
  const breadCrumbsData = [...breadCrumbArr, { name: 'All Products', href: '/products' }];
  return (
    <div className="container mx-auto pb-8 xs:pt-6 md:px-6 md:py-6 md:pb-14 lg:py-12">
      <div className="page-header">
        <h1 className="py-4 text-3xl font-[700] xs:pt-0 md:py-6 md:text-4xl lg:text-6xl">
          All Products
        </h1>
      </div>
      <div className="breadcrumb border-b border-t border-[#adadad] py-2 xs:pt-0 md:py-4">
        <nav className="bg-grey-light flex w-full flex-row flex-wrap items-center justify-between rounded-md">
          <ol className="list-reset flex items-center gap-4 text-lg">
            {breadCrumbsData.map((item: BreadCrumbItemType, index) => {
              return (
                <li key={index} className="inline-flex items-center">
                  <Link
                    href={item.href}
                    className="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                  {index !== breadCrumbsData.length - 1 ? (
                    <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                      <ChevronRightIcon className="ml-4 h-3" />
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <div className="filter-dropdown relative inline-flex flex-row items-center gap-4">
            {/* <select id="countries" className="text-lg block w-full">
                            {sortingProducts.map((item, index) => {
                                return (
                                    <option key={index}>{item.title}</option>
                                )
                            })}
                        </select> */}
            <label htmlFor="sorting">Sort By: </label>
            <FilterItemDropdown list={sortingProducts} />
          </div>
        </nav>
      </div>
      <div className="pt-4 md:pt-[60px]">
        <Filter />
        {products.length > 0 ? (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </div>
    </div>
  );
}
