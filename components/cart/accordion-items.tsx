'use client'

import { useState } from "react";

export type AccordionItem = {
    title?: string;
    description: string
}

const AccordionItem = ({ item, index }: { item: AccordionItem, index: number }) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);
    const handleAccordionClick = (index: number) => {
        if (accordionOpen) {
            setAccordionOpen(false);
        }
        if (
            index !== isAccordionOpen ||
            (index === isAccordionOpen && !accordionOpen)
        ) {
            setAccordionOpen(true);
        } else {
            setAccordionOpen(false);
        }
        setIsAccordionOpen(index);
    };
    return (
        <div className="accordion-item bg-white">
            <h2 className="z-[999]">
                <button
                    onClick={() => handleAccordionClick(index)}
                    className="relative flex justify-between items-center w-full border-b py-4 xl:text-lg lg:text-lg md:text-lg sm:text-md xs:text-sm font-[600] text-left border-0 rounded-none focus:outline-none"
                >
                    <span>{item.title}</span>
                    {isAccordionOpen === index && accordionOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    )}
                </button>
            </h2>
            <div
                className={`accordion-content z-[444]${isAccordionOpen === index && accordionOpen
                    ? " show"
                    : ""
                    }`}
            >
                <div className="accordion-body py-2" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
        </div>
    );
};

export const AccordionItems = () => {
    const accordionItems = [
        {
            title: 'Details',
            description: `
            <ul>
                <li>100% US Grown Cotton Fleece 360gsm</li>
                <li>Custom relaxed fit</li>
                <li>Pigment dye to create a worn in washed look</li>
                <li>Branded woven label</li>
                <li>Manufactured in an audited and sustainable facility</li>
            </ul>
            `
        },
        {
            title: 'Shipping',
            description: `
            <ul>
                <li>USA Orders: 1-3 business days</li>
                <li>Other countries: 4-15 business days</li>
                <li>Rest of world: 8-15 business days</li>
            </ul>
            `
        }
    ]
    return (
        <>
            <div className="accordion">
                {accordionItems.map((item, index) => {
                    return (
                        <AccordionItem key={index} item={item} index={index} />
                    )
                })}
            </div>
        </>
    )
}