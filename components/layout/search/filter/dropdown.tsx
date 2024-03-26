'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import type { ListItem } from '.';
import { FilterItem } from './item';

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded border-black/30 py-2 text-sm dark:border-white/30 gap-4"
      >
        <div>{active}</div>
        {openSelect ? (
          <ChevronUpIcon className="h-4" />
        ) : (
          <ChevronDownIcon className="h-4" />
        )}
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 rounded-b-md bg-white p-4 shadow-md dark:bg-black left-0 md:left-auto md:right-0 min-w-[200px] w-full border border-[#adadad]"
        >
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
