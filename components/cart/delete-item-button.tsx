import LoadingDots from 'components/loading-dots';
import { useRouter } from 'next/navigation';

import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { removeItem } from 'components/cart/actions';
import type { CartItem } from 'lib/shopify/types';
import Image from 'next/image';
import { useTransition } from 'react';
import deleteIcon from '../../images/delete.svg';

export default function DeleteItemButton({
  item,
  isCartPage
}: {
  item: CartItem;
  isCartPage?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
        {
          'cursor-not-allowed px-0': isPending,
          'h-full w-[35px] rounded-none !bg-[#11151C]': isCartPage === 'cart'
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <>
          {isCartPage === 'cart' ? (
            <Image src={deleteIcon} alt="delete icon" className="h-4 w-4 text-white" />
          ) : (
            <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
          )}
        </>
      )}
    </button>
  );
}
