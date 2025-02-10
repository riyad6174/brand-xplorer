import React from 'react';

const Hero = () => {
  return (
    <div className='container py-10  '>
      <div className='grid grid-cols-3 md:grid-cols-3 gap-4'>
        {/* Left Side - Large Image */}
        <div className='relative col-span-2 '>
          <img
            src='/assets/banner/image1.png' // Replace with actual image URL
            alt='Winter Collection'
            className=' h-[580px] w-full object-cover rounded-xl'
          />
        </div>

        {/* Right Side - Two Small Images */}
        <div className='flex flex-col gap-4'>
          {/* Top Right Image */}
          <div className='relative  rounded-xl overflow-hidden'>
            <img
              src='/assets/banner/image3.png' // Replace with actual image URL
              alt='Online Shopping'
              className='h-[282px] w-full object-cover'
            />
            <div className='absolute bottom-0 p-4'>
              <button className='mt-2 bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-blue-100'>
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className='relative  rounded-xl overflow-hidden'>
            <img
              src='/assets/banner/image2.png' // Replace with actual image URL
              alt='Trade-In Offer'
              className='h-[282px] w-full object-cover'
            />
            <div className='absolute bottom-0 p-4'>
              <button className='mt-2 bg-white text-orange-600 font-semibold py-2 px-4 rounded-md hover:bg-orange-100'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
