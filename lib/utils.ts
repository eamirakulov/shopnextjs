import { ReadonlyURLSearchParams } from 'next/navigation';
import { Collection, Product } from './shopify/types';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function extractProductColors(products: Product[]) {
  const colors = new Set<string>();
  products.forEach((product) => {
    if (product.options && product.options.length > 0) {
      product.options.forEach((option) => {
        if (option.name === 'Color') {
          option.values.forEach((value) => {
            colors.add(value);
          });
        }
      });
    }
  });
  return Array.from(colors);
}

export const filterCollections = (collections: Collection[]) => {
  return collections.filter(
    (item) => item.handle !== 'all' && item.handle !== 'frontpage' && item.handle !== ''
  );
};
