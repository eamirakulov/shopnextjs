import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartPageComponent } from 'components/cart/cart-page';
import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const runtime = 'edge';

export const metadata = {
  title: 'Cart',
  description: 'Cart | Opascope'
};

export type BreadCrumbItemType = {
  name?: string;
  href: string;
};

export default async function CartPage() {
  //const products = await getProducts({ sortKey: 'ID', reverse: false, query: '', first: 6 });
  const cartId = cookies().get('cartId')?.value;
  let cart: any;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return (
    <div className="container mx-auto pb-8 xs:pt-6 md:px-6 md:py-6 md:pb-14 lg:py-12">
      {cart?.lines.length > 0 ? (
        <>
          <div className="page-header flex justify-between xs:flex-col xs:items-start sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center">
            <h1 className="py-4 text-3xl font-[700] xs:pt-0 md:py-6 md:text-4xl lg:text-6xl">
              Shopping cart
            </h1>
            <Link href="/products" legacyBehavior>
              <a className="md:text-md relative text-sm text-[#6E7074] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-[#6E7074] lg:text-lg">
                Continue Shopping
              </a>
            </Link>
          </div>
          <CartPageComponent cart={cart} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center bg-[#f9f9f9] px-8 py-24 text-center">
          <div className="flex w-full flex-col items-center justify-center overflow-hidden">
            <ShoppingCartIcon className="h-16" />
            <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
          </div>
          <p className="text-base-regular mb-6 mt-4 max-w-[32rem]">
            You don't have anything in your cart. Let's change that, use the link below to start
            browsing our products.
          </p>
          <div>
            <div className="flex items-start">
              <a
                className="text-large-regular group flex items-center gap-x-4 border-b border-current py-2 transition-all duration-300 hover:pl-4 hover:pr-1"
                href="/products"
              >
                <span>Explore products</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 group-hover:ml-2"
                >
                  <path
                    d="M3.125 10H16.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M11.875 5L16.875 10L11.875 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
