export default function Filter() {
    return (
      <div>
        <div className='color-container-52 h-20 relative'>
          <div className="color-left-[85px] top-0 absolute text-black text-base font-normal font-['Helvetica']">
            Color
          </div>
          <div className='container-group w-52 h-10 left-0 top-[34px] absolute'>
            <div className='box1 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            <div className='box2 w-10 h-10 left-[57px] top-0 absolute border border-zinc-900' />
            <div className='box3 w-10 h-10 left-[114px] top-0 absolute border border-zinc-900' />
            <div className='box4 w-10 h-10 left-[171px] top-0 absolute border border-zinc-900' />
            <div className='box1-inside w-6 h-6 left-[7px] top-[7px] absolute bg-neutral-900' />
            <div className='box2-inside w-6 h-6 left-[64px] top-[7px] absolute bg-gray-200' />
            <div className='box3-inside w-6 h-6 left-[121px] top-[7px] absolute bg-stone-300' />
            <div className='box4-inside w-6 h-6 left-[178px] top-[7px] absolute bg-zinc-600' />
          </div>
        </div>
        <div className='category-container w-64 h-20 relative'>
          <div className="category left-[106px] top-0 absolute text-black text-base font-normal font-['Helvetica']">
            Category
          </div>
          <div className='category-group w-64 h-10 left-0 top-[34px] absolute'>
            <div className='Rectangle15 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            <div className='Group16 w-10 h-10 left-[59px] top-0 absolute'>
              <div className='Rectangle11 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            </div>
            <div className='Group14 w-10 h-10 left-[173px] top-0 absolute'>
              <div className='Rectangle13 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            </div>
            <div className='Group15 w-10 h-10 left-[116px] top-0 absolute'>
              <div className='Rectangle12 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            </div>
            <div className='Group13 w-10 h-10 left-[230px] top-0 absolute'>
              <div className='Rectangle14 w-10 h-10 left-0 top-0 absolute border border-zinc-900' />
            </div>
          </div>
        </div>
        <div className='clear w-44 h-10 relative'>
          <button className='clear-box w-44 h-10 left-0 top-0 absolute bg-zinc-900'>
            <div className="clear-filters left-[46px] top-[10px] absolute text-white text-base font-normal font-['Helvetica']">
              Clear Filters
            </div>
          </button>
        </div>
      </div>
    );
  }
  