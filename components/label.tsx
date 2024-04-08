import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    // <div
    //   className={clsx('w-full pb-4 ', {
    //     'lg:px-20 lg:pb-[35%]': position === 'center'
    //   })}
    // >
    <div className="flex flex-col items-start justify-between gap-4 pb-6 font-semibold  @[275px]/label:text-xs dark:border-neutral-800">
      <h3 className="text-1xl lg:text-1xl inline font-normal tracking-tight text-[#404040] xl:text-2xl dark:text-white">
        {title}
      </h3>
      <div className="inline-flex w-full items-center justify-between">
        <Price
          className="flex-none text-[#7F838A] dark:text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
        <button
          type="button"
          className="border-0 bg-transparent p-0 text-[16px] text-[#6E7074] underline xl:text-[20px] dark:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Label;
