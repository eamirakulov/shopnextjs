'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import Img1 from '../../images/slider-img.svg';

export function SliderSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  const data = [
    {
      title: `Show Your Love<br class="xs:hidden sm:block" /> for Marketing`,
      link: '/products',
      img: Img1
    },
    {
      title: `Show Your Love<br class="xs:hidden sm:block" /> for Marketing`,
      link: '/products',
      img: Img1
    },
    {
      title: `Show Your Love<br class="xs:hidden sm:block" /> for Marketing`,
      link: '/products',
      img: Img1
    }
  ];
  return (
    <section className="container mx-auto pb-10">
      <Slider {...settings} className="main-slider">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative !flex items-center justify-center gap-2 bg-[#f5f5f5] dark:bg-zinc-900    xs:flex-col-reverse sm:flex-row md:p-0 md:px-4"
            >
              <div className="hero-slider-item xs:px-[20px] xs:pb-[30px] sm:px-[0px] sm:pb-[0px] md:w-1/2">
                <h1
                  className="mb-4 font-[700] xs:text-4xl sm:text-6xl sm:leading-[50px] md:text-4xl md:leading-[50px] lg:mb-6 lg:text-6xl lg:leading-[80px] xl:mb-4"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <Link href={item.link} legacyBehavior>
                  <a className="block w-max bg-black px-6 py-2 text-sm text-white">Shop Now</a>
                </Link>
              </div>
              <Image
                className="xs:w-full md:w-1/2"
                src={item.img}
                alt="slider img"
                priority={true}
              />
              <div className="absolute right-4 top-1/2 translate-y-[-50%]">
                <ul className="flex list-none flex-col gap-4">
                  <li className="rounded-full bg-black p-2 text-center">
                    <svg
                      className="mx-auto"
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 1.65712C15.4118 1.93848 14.7787 2.12796 14.1148 2.21352C14.7926 1.77598 15.3131 1.0835 15.5579 0.258386C14.9243 0.663767 14.2209 0.957182 13.4738 1.11623C12.8749 0.429497 12.0211 0 11.0777 0C9.26498 0 7.79521 1.58248 7.79521 3.53416C7.79521 3.81093 7.82455 4.0808 7.88054 4.33976C5.15219 4.19276 2.73368 2.78541 1.11459 0.647116C0.831945 1.16906 0.670355 1.77599 0.670355 2.42368C0.670355 3.64958 1.24898 4.73136 2.13052 5.36527C1.59189 5.3469 1.08633 5.18785 0.643156 4.92314V4.96735C0.643156 6.68017 1.77535 8.1082 3.27605 8.43376C3.00087 8.51415 2.71075 8.55779 2.41157 8.55779C2.19985 8.55779 1.994 8.53539 1.79348 8.49405C2.21105 9.89796 3.42377 10.92 4.85994 10.9487C3.73682 11.8962 2.32144 12.4617 0.783413 12.4617C0.517831 12.4617 0.256516 12.4451 0 12.4118C1.4527 13.4143 3.17792 14 5.03166 14C11.0691 14 14.3708 8.61463 14.3708 3.94471C14.3708 3.7914 14.3681 3.63867 14.3612 3.48766C15.0033 2.98811 15.56 2.36568 16 1.65712Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li className="rounded-full bg-black p-2 text-center">
                    <svg
                      className="mx-auto"
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.52801 1.53563C3.52801 2.37279 2.82752 3.0503 1.73207 3.0503C0.679302 3.0503 -0.0211893 2.37279 0.000489333 1.53563C-0.0211893 0.657773 0.679285 0 1.75306 0C2.8275 0 3.50701 0.657773 3.52801 1.53563ZM0.0885621 13.9982V4.24686H3.41893V13.9976H0.0885621V13.9982Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.8327 7.35934C5.8327 6.14305 5.78866 5.10614 5.74463 4.24863H8.63736L8.79114 5.58453H8.85686C9.29518 4.96621 10.3906 4.02979 12.1656 4.02979C14.3565 4.02979 16 5.34595 16 8.21624V14H12.6696V8.59598C12.6696 7.339 12.1879 6.4821 10.9827 6.4821C10.0621 6.4821 9.51468 7.06036 9.29586 7.61826C9.20779 7.818 9.16444 8.09664 9.16444 8.37652V14H5.83405V7.35934H5.8327Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li className="rounded-full bg-black p-2 text-center">
                    <svg
                      className="mx-auto"
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.58786 2.6985C7.12933 2.6135 6.51004 2.55 6.12056 2.55C5.06594 2.55 4.99744 2.975 4.99744 3.655V4.8655H7.63372L7.40391 7.373H4.99744V15H1.69656V7.373H0L0 4.8655H1.69656V3.3145C1.69656 1.19 2.77384 0 5.47863 0C6.41834 0 7.10614 0.127501 8 0.297501L7.58786 2.6985Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
