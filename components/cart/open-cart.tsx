import clsx from 'clsx';
import Image from 'next/image';
import cartLogo from "../../images/cart-logo.svg";

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center bg-[#11151C] dark:bg-white text-black transition-colors dark:text-white">
      {/* <ShoppingCartIcon
        className={clsx('h-6 transition-all ease-in-out hover:scale-110 ', className)}
      /> */}
      <Image src={cartLogo} alt='cart logo' priority={true} className={clsx('h-5 dark:invert transition-all ease-in-out hover:scale-110 ', className)} />
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
