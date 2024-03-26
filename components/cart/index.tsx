import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
  let cartId;
  try {
    // Attempt to get the cartId from cookies
    cartId = cookies()?.get('cartId')?.value;
  } catch (error) {
    console.error('Error retrieving cartId from cookies:', error);
  }

  let cart;

  // If cartId is available, fetch the cart
  if (cartId) {
    try {
      cart = await getCart(cartId);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }

  return <CartModal cart={cart} />;
}

// export default async function Cart() {
//   const cartId = cookies().get('cartId')?.value;
//   let cart;

//   if (cartId) {
//     cart = await getCart(cartId);
//   }

//   return <CartModal cart={cart} />;
// }