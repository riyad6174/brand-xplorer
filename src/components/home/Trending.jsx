import React, { useRef } from 'react';
import CustomSection from '../layout/CustomSection';
import ProductCard from '../product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
function Trending() {
  const swiperRef = useRef(null); // Create ref for Swiper instance
  const prevButtonRef = useRef(null); // Ref for previous button
  const nextButtonRef = useRef(null); // Ref for next button

  return (
    <CustomSection>
      <div className='bg-[#FFEBE2] px-10 py-6 rounded-2xl'>
        <div className='flex items-center justify-between py-8'>
          <div className='flex items-center justify-start gap-4'>
            <h2 className='text-2xl font-semibold text-[#212B36]'>Trending</h2>
          </div>
          <div className='flex items-center justify-center gap-3 text-xs font-semibold'>
            <span>More</span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: nextButtonRef.current, // Use ref for next button
              prevEl: prevButtonRef.current, // Use ref for prev button
            }}
            spaceBetween={16}
            slidesPerView={5}
            loop={true} // Optional for looping the slides
            grabCursor={true} // Optional for grab cursor effect
            className='w-full'
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevButtonRef} // Attach ref to previous button
            className='custom-prev absolute left-2 z-50 top-1/2 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-[#e84118] transition duration-300'
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            ref={nextButtonRef} // Attach ref to next button
            className='custom-next absolute right-2 z-50 top-1/2 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-[#e84118] transition duration-300'
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </CustomSection>
  );
}

export default Trending;
