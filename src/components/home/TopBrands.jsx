import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import CustomSection from '../layout/CustomSection';
import SectionTitle from '../common/SectionTitle';
import { Autoplay } from 'swiper/modules';
function TopBrands() {
  return (
    <div className=''>
      <CustomSection>
        <SectionTitle title='Top Brands' btnName='More' />

        <div className='relative'>
          <Swiper
            modules={[Autoplay]} // Use Autoplay module correctly
            spaceBetween={16}
            slidesPerView={7} // Adjust the number of slides per view
            loop={true} // Infinite loop
            autoplay={{
              delay: 3000, // Slide every 3 seconds
              disableOnInteraction: false, // Keep autoplay going even after interaction
            }}
            className='w-full'
          >
            {/* Brand Cards */}
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/adidas.png' alt='' />
                </div>
                <p className='py-2'>Adidas</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/nike.png' alt='' />
                </div>
                <p className='py-2'>Nike</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/puma.png' alt='' />
                </div>
                <p className='py-2'>Puma</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/asos.png' alt='' />
                </div>
                <p className='py-2'>Xiaomi USA</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/spalding.png' alt='' />
                </div>
                <p className='py-2'>Spalding</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/puma.png' alt='' />
                </div>
                <p className='py-2'>Puma</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/nike.png' alt='' />
                </div>
                <p className='py-2'>Nike</p>
              </div>
            </SwiperSlide>
            {/* Repeat the brands to create a seamless loop */}
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/adidas.png' alt='' />
                </div>
                <p className='py-2'>Adidas</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/nike.png' alt='' />
                </div>
                <p className='py-2'>Nike</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col justify-center items-center'>
                <div className=' w-[160px] h-[160px] flex items-center justify-center bg-white rounded-xl'>
                  <img src='/assets/brands/puma.png' alt='' />
                </div>
                <p className='py-2'>Puma</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </CustomSection>
    </div>
  );
}

export default TopBrands;
