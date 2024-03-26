import { AccordionItems } from 'components/cart/accordion-items';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-3xl leading-tight md:text-4xl font-bold md:leading-tight md:mt-8 lg:mt-0">{product.title}</h1>
        <div className="pt-2">
          <Price
            className="flex-none text-[#7F838A]"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%] md:text-[18px]"
          html={product.descriptionHtml}
        />
      ) : null}
      
      <VariantSelector options={product.options} variants={product.variants} />

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />

      <AccordionItems />
    </>
  );
}

