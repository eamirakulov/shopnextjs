'use client';

import DeleteItemButton from 'components/cart/delete-item-button';
import EditItemQuantityButton from 'components/cart/edit-item-quantity-button';
import { MerchandiseSearchParams } from 'components/cart/modal';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { Cart } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function CartPageComponent({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart && cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      // if (!isOpen) {
      //     setIsOpen(true);
      // }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);
  console.log(cart, 'cart object');
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <ul className="products-col">
            {cart?.lines.map((item: any, i: number) => {
              const merchandiseSearchParams = {} as MerchandiseSearchParams;

              item.merchandise.selectedOptions.forEach(({ name, value }: any) => {
                if (value !== DEFAULT_OPTION) {
                  merchandiseSearchParams[name.toLowerCase()] = value;
                }
              });

              const merchandiseUrl = createUrl(
                `/product/${item.merchandise.product.handle}`,
                new URLSearchParams(merchandiseSearchParams)
              );

              return (
                <li
                  key={i}
                  className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                >
                  <div className="relative flex w-full flex-col justify-start gap-6 py-4 lg:flex-row lg:py-8">
                    <Link href={merchandiseUrl} onClick={closeCart} className="z-30">
                      <div className="relative flex h-[230px] w-full max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-white object-cover md:max-w-[210px] lg:h-[300px] lg:max-w-[210px]">
                        <Image
                          className="m-0 h-[200px] w-full object-cover text-center"
                          alt={
                            item.merchandise.product.featuredImage.altText ||
                            item.merchandise.product.title
                          }
                          src={item.merchandise.product.featuredImage.url}
                        />
                      </div>
                    </Link>
                    <div className="inline-flex flex-col gap-1 md:gap-3 lg:gap-3">
                      <h4 className="text-xl font-[600] leading-tight">
                        <Link href={merchandiseUrl} onClick={closeCart} className="z-30">
                          {item.merchandise.product.title}
                        </Link>
                      </h4>
                      {item.merchandise.title !== DEFAULT_OPTION ? (
                        <p className="text-md relative flex w-max justify-start space-y-2 text-left font-[600] text-[#6E7074] after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-full after:bg-[#adadad]">
                          {item.merchandise.title}
                        </p>
                      ) : null}
                      <Price
                        className="text-md relative flex w-max justify-start space-y-2 text-left font-[600] text-[#6E7074] after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-full after:bg-[#adadad]"
                        amount={item.cost.totalAmount.amount}
                        currencyCode={item.cost.totalAmount.currencyCode}
                      />
                    </div>
                    <div className="ml-0 flex h-max flex-row justify-start gap-2 md:justify-between lg:ml-auto lg:justify-between">
                      <div className="flex h-9 flex-row items-center border border-neutral-200">
                        <EditItemQuantityButton item={item} type="minus" />
                        <p className="w-6 text-center">
                          <span className="w-full text-sm">{item.quantity}</span>
                        </p>
                        <EditItemQuantityButton item={item} type="plus" />
                      </div>
                      <div className="z-40">
                        <DeleteItemButton item={item} isCartPage="cart" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1">
          <div className="py-4 md:py-6 lg:py-8">
            <div className="flex w-full flex-col gap-0 bg-[#F9F9F9] p-6">
              <h3 className="text-xl font-[600]">Summary</h3>
              <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="border-b border-[#ADADAD] py-4">
                  <div className="mb-3 flex items-center justify-between font-bold dark:border-neutral-700">
                    <h4>Taxes</h4>
                    {cart ? (
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart?.cost.totalTaxAmount.amount}
                        currencyCode={cart?.cost.totalTaxAmount.currencyCode}
                      />
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between font-bold dark:border-neutral-700">
                    <h4>Shipping</h4>
                    <p className="text-right">Calculated at checkout</p>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-[#ADADAD] py-4 font-bold dark:border-neutral-700">
                  <h4>Total</h4>
                  {cart ? (
                    <Price
                      className="text-right text-base text-black dark:text-white"
                      amount={cart?.cost.totalAmount.amount}
                      currencyCode={cart?.cost.totalAmount.currencyCode}
                    />
                  ) : null}
                </div>
              </div>
              <a
                href={cart?.checkoutUrl}
                className="text-md relative flex w-full items-center justify-center bg-[#11151C] px-5 py-5 text-center font-medium tracking-wide text-white opacity-90 hover:opacity-90"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
