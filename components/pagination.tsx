'use client';
import * as React from "react";

interface NumberItemProps {
  number: number;
  isActive?: boolean;
  onClick: () => void;
}

const NumberItem: React.FC<NumberItemProps> = ({
  number,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`justify-center items-center px-4 w-10 h-10 ${
        isActive ? "text-white bg-zinc-900" : "bg-stone-50"
      }`}
      onClick={onClick}
      aria-selected={isActive ? "true" : "false"}
    >
      {number}
    </button>
  );
};

const Pagination: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex justify-end gap-5 text-sm leading-6 text-center whitespace-nowrap text-neutral-700 pt-10 pb-[216px]">
      <div className="flex gap-1">
        <NumberItem
          number={1}
          isActive={activeIndex === 0}
          onClick={() => handleClick(0)}
        />
        <NumberItem
          number={2}
          isActive={activeIndex === 1}
          onClick={() => handleClick(1)}
        />
        <NumberItem
          number={3}
          isActive={activeIndex === 2}
          onClick={() => handleClick(2)}
        />
      </div>
      <button className="my-auto font-bold text-zinc-900 dark:invert">...</button>
      <div className="flex gap-1">
        <NumberItem
          number={7}
          isActive={activeIndex === 3}
          onClick={() => handleClick(3)}
        />
        <button className="justify-center items-center border px-4 w-10 h-10 hover:bg-stone-50">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M7.5 6.00002C7.5 6.21508 7.41597 6.43012 7.24825 6.59409L1.96804 11.7538C1.63215 12.0821 1.08757 12.0821 0.751814 11.7538C0.416062 11.4257 0.416062 10.8937 0.751814 10.5654L5.42404 6.00002L0.751976 1.43459C0.416225 1.10636 0.416225 0.574357 0.751976 0.24629C1.08773 -0.0820961 1.63231 -0.0820961 1.9682 0.24629L7.24842 5.40595C7.41616 5.57 7.5 5.78503 7.5 6.00002Z" fill="#ADADAD"/>
        </svg>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;