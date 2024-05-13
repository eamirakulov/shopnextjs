'use client';
import { getProducts } from 'lib/shopify';
import { Collection } from 'lib/shopify/types';
import { useEffect, useState } from 'react';

export default function Filter({
  colors,
  collections
}: {
  colors: string[];
  collections: Collection[];
}) {
  // console.log(data)
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color === selectedColor ? null : color);
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts({ sortKey: 'ID', reverse: false, query: '', first: 6 });
      console.log(products);
    };
    getData();
  }, []);

  return (
    <div className="items-end pb-[57px] md:flex">
      <div className="category-container relative pb-[22px] md:pb-[0] md:pr-[201px] dark:invert">
        <div className="pb-[16px] text-left text-base dark:invert">Category</div>

        <div>
          <select
            className="focus:shadow-outline  appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
            value={selectedCategory || ''}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Select a Category</option>
            {collections.map(({ handle, title }) => (
              <option key={handle} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="flex">
          <div className="item flex items-center justify-center flex-[0_0_39px] border border-[#11151c] mr-[20px] w-[39px] h-[39px] cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.62329 6.24658e-09C5.35587 -5.5029e-05 4.11505 0.363555 3.04812 1.04767C1.98119 1.73178 1.13295 2.70767 0.60411 3.85948C0.0752649 5.01129 -0.111982 6.29067 0.0645964 7.54572C0.241175 8.80078 0.774163 9.97882 1.60029 10.94L0.770292 11.77C0.722536 11.8161 0.684445 11.8713 0.658241 11.9323C0.632036 11.9933 0.618243 12.0589 0.617666 12.1253C0.617089 12.1917 0.62974 12.2575 0.654881 12.319C0.680021 12.3804 0.717148 12.4363 0.764094 12.4832C0.81104 12.5301 0.866866 12.5673 0.928315 12.5924C0.989763 12.6176 1.0556 12.6302 1.12199 12.6296C1.18838 12.629 1.25399 12.6153 1.31499 12.5891C1.376 12.5628 1.43117 12.5248 1.47729 12.477L2.30729 11.647C3.5738 12.7365 5.20524 13.307 6.87468 13.2444C8.54412 13.1818 10.1282 12.4905 11.3095 11.3092C12.4908 10.1279 13.182 8.54382 13.2447 6.87438C13.3073 5.20495 12.7367 3.57351 11.6473 2.307L12.4773 1.477C12.5238 1.43051 12.5607 1.37532 12.5858 1.31458C12.611 1.25384 12.6239 1.18874 12.6239 1.123C12.6239 1.05726 12.611 0.992156 12.5858 0.931417C12.5607 0.870677 12.5238 0.815488 12.4773 0.769C12.4308 0.722512 12.3756 0.685636 12.3149 0.660477C12.2541 0.635318 12.189 0.622368 12.1233 0.622368C12.0575 0.622368 11.9924 0.635318 11.9317 0.660477C11.871 0.685636 11.8158 0.722512 11.7693 0.769L10.9393 1.599C9.7391 0.565497 8.20714 -0.00171118 6.62329 0.00100005V6.24658e-09ZM10.2653 2.274C9.17822 1.36264 7.78915 0.891622 6.37196 0.953806C4.95477 1.01599 3.6123 1.60687 2.60923 2.60994C1.60616 3.61301 1.01528 4.95548 0.953097 6.37267C0.890913 7.78986 1.36193 9.17893 2.27329 10.266L10.2653 2.274ZM2.98129 10.972C4.06836 11.8834 5.45743 12.3544 6.87462 12.2922C8.29181 12.23 9.63429 11.6391 10.6374 10.6361C11.6404 9.63299 12.2313 8.29052 12.2935 6.87333C12.3557 5.45614 11.8847 4.06707 10.9733 2.98L2.98029 10.973L2.98129 10.972Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="item pr-[20px] cursor-pointer">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
              <rect x="0.5" y="0.5" width="38" height="38" stroke="#11151C" />
              <path
                opacity="0.2"
                d="M29.3584 19.1069L24.3415 11.6304C24.2113 11.4365 24.0349 11.2775 23.828 11.1675C23.6211 11.0575 23.3901 11 23.1555 11H15.844C15.6094 11 15.3784 11.0575 15.1715 11.1675C14.9646 11.2775 14.7882 11.4365 14.658 11.6304L9.64106 19.1069C9.5846 19.1911 9.54696 19.2863 9.53067 19.3862C9.51437 19.4861 9.51981 19.5883 9.5466 19.6859L11.5418 26.9561C11.6246 27.2549 11.8033 27.5186 12.0509 27.707C12.2985 27.8955 12.6013 27.9984 12.9132 28H15.2202C15.5984 28 15.961 27.8507 16.2284 27.5851C16.4958 27.3194 16.646 26.9591 16.646 26.5833V25.1667H22.349V26.5833C22.349 26.9591 22.4993 27.3194 22.7666 27.5851C23.034 27.8507 23.3967 28 23.7748 28H26.0819C26.3945 27.9993 26.6983 27.8969 26.9468 27.7084C27.1953 27.5198 27.3747 27.2556 27.4577 26.9561L29.4529 19.6859C29.4797 19.5883 29.4851 19.4861 29.4688 19.3862C29.4525 19.2863 29.4149 19.1911 29.3584 19.1069ZM15.2202 23.75V14.346L17.3589 15.5599V20.2083C17.3589 20.3962 17.434 20.5764 17.5677 20.7092C17.7014 20.842 17.8827 20.9167 18.0718 20.9167C18.2608 20.9167 18.4422 20.842 18.5758 20.7092C18.7095 20.5764 18.7846 20.3962 18.7846 20.2083V16.3692L19.1411 16.5781C19.2494 16.6403 19.3724 16.673 19.4975 16.673C19.6227 16.673 19.7456 16.6403 19.854 16.5781L20.2104 16.3736V19.5C20.2104 19.6879 20.2855 19.868 20.4192 20.0009C20.5529 20.1337 20.7342 20.2083 20.9233 20.2083C21.1123 20.2083 21.2937 20.1337 21.4274 20.0009C21.5611 19.868 21.6362 19.6879 21.6362 19.5V15.5599L23.7748 14.346V23.75H15.2202ZM23.1555 12.4167L23.4709 12.8868L19.4975 15.1429L15.5241 12.8868L15.844 12.4167H23.1555ZM15.2202 26.5833H12.9132L11.0036 19.6248L13.7945 15.4643V23.75C13.7945 24.1257 13.9447 24.4861 14.2121 24.7517C14.4795 25.0174 14.8421 25.1667 15.2202 25.1667V26.5833ZM26.0819 26.5833H23.7748V25.1667C24.1529 25.1667 24.5156 25.0174 24.783 24.7517C25.0503 24.4861 25.2006 24.1257 25.2006 23.75V15.4643L27.9915 19.6257L26.0819 26.5833Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="item pr-[20px] cursor-pointer">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
              <rect x="0.5" y="0.5" width="38" height="38" stroke="#11151C" />
              <path
                opacity="0.2"
                d="M29.3584 19.1069L24.3415 11.6304C24.2113 11.4365 24.0349 11.2775 23.828 11.1675C23.6211 11.0575 23.3901 11 23.1555 11H15.844C15.6094 11 15.3784 11.0575 15.1715 11.1675C14.9646 11.2775 14.7882 11.4365 14.658 11.6304L9.64106 19.1069C9.5846 19.1911 9.54696 19.2863 9.53067 19.3862C9.51437 19.4861 9.51981 19.5883 9.5466 19.6859L11.5418 26.9561C11.6246 27.2549 11.8033 27.5186 12.0509 27.707C12.2985 27.8955 12.6013 27.9984 12.9132 28H15.2202C15.5984 28 15.961 27.8507 16.2284 27.5851C16.4958 27.3194 16.646 26.9591 16.646 26.5833V25.1667H22.349V26.5833C22.349 26.9591 22.4993 27.3194 22.7666 27.5851C23.034 27.8507 23.3967 28 23.7748 28H26.0819C26.3945 27.9993 26.6983 27.8969 26.9468 27.7084C27.1953 27.5198 27.3747 27.2556 27.4577 26.9561L29.4529 19.6859C29.4797 19.5883 29.4851 19.4861 29.4688 19.3862C29.4525 19.2863 29.4149 19.1911 29.3584 19.1069ZM15.2202 23.75V14.346L17.3589 15.5599V20.2083C17.3589 20.3962 17.434 20.5764 17.5677 20.7092C17.7014 20.842 17.8827 20.9167 18.0718 20.9167C18.2608 20.9167 18.4422 20.842 18.5758 20.7092C18.7095 20.5764 18.7846 20.3962 18.7846 20.2083V16.3692L19.1411 16.5781C19.2494 16.6403 19.3724 16.673 19.4975 16.673C19.6227 16.673 19.7456 16.6403 19.854 16.5781L20.2104 16.3736V19.5C20.2104 19.6879 20.2855 19.868 20.4192 20.0009C20.5529 20.1337 20.7342 20.2083 20.9233 20.2083C21.1123 20.2083 21.2937 20.1337 21.4274 20.0009C21.5611 19.868 21.6362 19.6879 21.6362 19.5V15.5599L23.7748 14.346V23.75H15.2202ZM23.1555 12.4167L23.4709 12.8868L19.4975 15.1429L15.5241 12.8868L15.844 12.4167H23.1555ZM15.2202 26.5833H12.9132L11.0036 19.6248L13.7945 15.4643V23.75C13.7945 24.1257 13.9447 24.4861 14.2121 24.7517C14.4795 25.0174 14.8421 25.1667 15.2202 25.1667V26.5833ZM26.0819 26.5833H23.7748V25.1667C24.1529 25.1667 24.5156 25.0174 24.783 24.7517C25.0503 24.4861 25.2006 24.1257 25.2006 23.75V15.4643L27.9915 19.6257L26.0819 26.5833Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="item pr-[20px] cursor-pointer">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
              <rect x="0.5" y="0.5" width="38" height="38" stroke="#11151C" />
              <path
                opacity="0.2"
                d="M21.3008 11C21.3008 11 20.4058 11.3077 19.0002 11.3077C17.5946 11.3077 16.6996 11 16.6996 11C16.5582 11 16.4178 11.0234 16.2844 11.0692L10.2002 13.1538L10.8535 16.5385L12.7738 16.7508C13.009 16.7768 13.2255 16.8885 13.3805 17.0636C13.5354 17.2388 13.6174 17.4646 13.6102 17.6962L13.3431 27H24.6573L24.3902 17.6962C24.383 17.4646 24.465 17.2388 24.6199 17.0636C24.7749 16.8885 24.9914 16.7768 25.2266 16.7508L27.1469 16.5385L27.8002 13.1538L21.716 11.0692C21.5826 11.0234 21.4422 11 21.3008 11Z"
                stroke="black"
                strokeWidth="1.37143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="item pr-[20px] cursor-pointer">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
              <rect x="0.5" y="0.5" width="38" height="38" stroke="#11151C" />
              <path
                opacity="0.2"
                d="M20 12C20.663 12 21.2989 12.2634 21.7678 12.7322C22.2366 13.2011 22.5 13.837 22.5 14.5V15H17.5V14.5C17.5 13.837 17.7634 13.2011 18.2322 12.7322C18.7011 12.2634 19.337 12 20 12ZM23.5 15V14.5C23.5 13.5717 23.1313 12.6815 22.4749 12.0251C21.8185 11.3687 20.9283 11 20 11C19.0717 11 18.1815 11.3687 17.5251 12.0251C16.8687 12.6815 16.5 13.5717 16.5 14.5V15H13V25C13 25.5304 13.2107 26.0391 13.5858 26.4142C13.9609 26.7893 14.4696 27 15 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V15H23.5ZM14 16H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H15C14.7348 26 14.4804 25.8946 14.2929 25.7071C14.1054 25.5196 14 25.2652 14 25V16Z"
                fill="black"
              />
            </svg>
          </div>
        </div> */}
      </div>

      <div className="color-container pb-[22px] md:pb-[0]">
        <div className="pb-[16px] text-left text-base">Color</div>

        {/* <div className="flex items-center justify-center cursor-pointer border-solid border-[#11151c] border w-[39px] h-[39px] dark:invert">
            <div className="cursor-pointer bg-[#161616] w-[25px] h-[25px]"></div>
          </div>

          <div className="flex cursor-pointer items-center justify-center border-solid border-[#11151c] border w-[39px] h-[39px] dark:invert">
            <div className="cursor-pointer bg-[#ebebeb] w-[25px] h-[25px]"></div>
          </div>

          <div className="flex cursor-pointer items-center justify-center border-solid border-[#11151c] border w-[39px] h-[39px] dark:invert">
            <div className="cursor-pointer bg-[#e2dad1] w-[25px] h-[25px]"></div>
          </div>

          <div className="flex cursor-pointer items-center justify-center border-solid border-[#11151c] border w-[39px] h-[39px] dark:invert">
            <div className="cursor-pointer bg-[#5a5a5a] w-[25px] h-[25px]"></div>
          </div> */}

        <div>
          <select
            className="focus:shadow-outline  appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
            value={selectedColor || ''}
            onChange={(e) => handleColorChange(e.target.value)}
          >
            <option value="">Select Color</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="md:pl-80">
        <div className="pb-[16px] text-left text-base">Trending</div>

        <div className="flex h-[39px] w-[39px] cursor-pointer justify-center border-solid border-[#11151c]">
          <input type="checkbox" id="react-option" className="peer hidden h-[39px] w-[39px]" />
          <label
            htmlFor="react-option"
            className="h-[39px] w-[39px] cursor-pointer border border-[#11151c] hover:bg-[#e2dad1] peer-checked:bg-[#11151c] dark:invert"
          ></label>
        </div>
      </div>

      <div className="clear ml-auto w-44">
        <button className="clear-box left-0 top-0 h-10 w-44 bg-zinc-900 dark:invert">
          <div className="clear-filters left-[46px] top-[10px] cursor-pointer font-['Helvetica'] text-base font-normal text-white">
            Clear Filters
          </div>
        </button>
      </div>
    </div>
  );
}
