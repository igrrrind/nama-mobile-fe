'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type Service = {
  title: string;
  link: string;
  iconUrl: string;
  descriptionPoints: string[];
};

export const ServiceSection = ({ services = servicesFallback }: { services?: Service[] }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 648);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveIndex(index);
        }
      });
    }, options);
    
    const serviceCards = sliderRef.current.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
    
    return () => {
      serviceCards.forEach(card => observer.unobserve(card));
    };
  }, [isMobile]);

  const scrollToPrevious = () => {
    if (sliderRef.current && activeIndex > 0) {
      const card = sliderRef.current.querySelector('.service-card');
      const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 0;
      const scrollAmount = cardWidth + 64; // Including the space-x-8 (32px)
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNext = () => {
    if (sliderRef.current && activeIndex < services.length - 1) {
      const card = sliderRef.current.querySelector('.service-card');
      const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 0;
      const scrollAmount = cardWidth + 64; // Including the space-x-8 (32px)
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <section className="py-4 pb-8 bg-gray-50 -mt-16 sm:mt-0">
      <div className="container mx-auto px-4">
        {isMobile != null && (isMobile ? (
          <>
          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button 
            onClick={scrollToPrevious}
             
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-50"
              disabled={activeIndex === 0}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
            onClick={scrollToNext}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-50"
              disabled={activeIndex === services.length - 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2 space-x-16 px-12"
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  data-index={index}
                  className="service-card flex-shrink-0 w-full snap-center p-4 flex rounded-2xl items-center bg-white shadow-md"
                >
                  {/* <div className="w-20 h-20 mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Image src={service.iconUrl} alt={service.title} width={64} height={64} className="w-16 h-16 object-contain" />
                  </div> */}
                  <div className="ml-4 flex-1 overflow-hidden">
                    <h3 className="sm:text-lg font-semibold mb-2 text-left text-gray-800 truncate">{service.title}</h3>
                    <ul className="text-sm text-blue-600 space-y-2">
                      {service.descriptionPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-left overflow-hidden">
                          <Link href={service.link} className="transition-colors flex items-left">
                            <span className="hover:text-primary-dark truncate">→ {point}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination dots */}
            
          </div>
          <div className="flex justify-center mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              onClick={() => {
                if (sliderRef.current) {
                  const cards = sliderRef.current.querySelectorAll('.service-card');
                  cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
                }
              }}
            />
          ))}
        </div>
        </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-4 flex w-full max-w-[360px] sm:max-w-screen mx-auto rounded-2xl text-center items-center transition-all bg-white shadow-md hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="min-w-20 w-20 min-h-20 h-20 mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Image src={service.iconUrl} alt={service.title} width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <div className="ml-4 flex-1 overflow-hidden ">
                  <h3 className="text-lg font-semibold mb-2 text-left text-gray-800 truncate">{service.title}</h3>
                  <ul className="text-sm text-blue-600 space-y-2">
                    {service.descriptionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-left">
                        <Link href={service.link} className="transition-colors truncate flex items-left">
                          <span className="hover:text-primary-dark">→ {point}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}

        {isMobile === null && <div className=" flex " style={{height: 172}}>

        </div>}
      </div>
    </section>
  );
};

const servicesFallback: Service[] = [
  {
    title: "Sửa chữa iPhone",
    link: "#",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IPhone_16_Pro_Vector.svg/440px-IPhone_16_Pro_Vector.svg.png",
    descriptionPoints: [
      "Thay màn hình bị vỡ",
      "Thay pin dung lượng cao",
      "Lắp kính cường lực mới",
    ],
  },
  {
    title: "Sửa chữa Samsung",
    link: "#",
    iconUrl: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-FE/Black/Samsung-Galaxy-S24-FE-Black-frontimage.png",
    descriptionPoints: [
      "Khắc phục vỡ màn hình",
      "Thay pin chính hãng",
      "Gắn kính cường lực chất lượng",
    ],
  },
  {
    title: "Sửa chữa Laptop",
    link: "#",
    iconUrl: "https://i0.wp.com/vuatao.vn/wp-content/uploads/2021/06/macbook-air-m1-2020-8-core-gpu-gold-thumb-650x650-1.png?fit=650%2C650&ssl=1",
    descriptionPoints: [
      "Sửa màn hình bị sọc/vỡ",
      "Nâng cấp/thay thế pin",
      "Dán kính bảo vệ màn hình",
    ],
  },
  {
    title: "Sửa chữa Smartwatch",
    link: "#",
    iconUrl: "https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-9.png",
    descriptionPoints: [
      "Thay màn hình cảm ứng",
      "Thay pin smartwatch",
      "Gắn kính bảo vệ mới",
    ],
  },
];