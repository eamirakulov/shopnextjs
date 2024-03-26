import Image from 'next/image';
import opascopeImg from '../../images/opascope-bg-img.svg';

export const NewsletterSection = () => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <>
      <div className="grid grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-2">
        <div className="left-side">
          <Image src={opascopeImg} alt="opascope img" className="w-full" />
        </div>
        <div className="right-side mx-auto my-auto p-8 pb-14 text-center md:p-4 md:pb-4 xl:p-0 xl:pb-0">
          <h2 className="pb-4 text-4xl font-[700] uppercase md:text-4xl md:leading-tight lg:text-6xl lg:leading-snug xl:text-7xl">
            10% Off your
            <br className="hidden md:block lg:block" /> first order
          </h2>
          <p className="pb-4 text-[16px] leading-8 lg:text-[20px] lg:leading-8">
            Sign up for our occasional (for now) newsletter{' '}
            <br className="hidden md:hidden lg:block" />
            featuring approaches to effective marketing.
          </p>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="relative mb-4 flex w-full items-center justify-center border-2 border-[#11151C] p-4 text-lg tracking-wide text-[#11151C] placeholder:text-[#11151C] hover:opacity-90 lg:p-6"
            />
            <input
              type="submit"
              value="Subscribe"
              className="mb-8 flex w-full cursor-pointer items-center justify-center bg-[#11151C] p-6 text-lg tracking-wide text-white hover:opacity-90"
            />
          </form>
          {/* <div className='subscribe-newsletter section-padding mx-auto bg-slate-100'>
                        <iframe src="/klaviyo.html" width="100%" height="200" style={{ textAlign: 'center' }}></iframe>
                    </div> */}
        </div>
      </div>
    </>
  );
};
