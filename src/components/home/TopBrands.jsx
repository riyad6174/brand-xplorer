import React from 'react';
import CustomSection from '../layout/CustomSection';
import SectionTitle from '../common/SectionTitle';

function TopBrands() {
  return (
    <div className=''>
      <CustomSection>
        <SectionTitle title='Top Brands' btnName='More' />

        <div className='grid grid-cols-7 gap-8'>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/adidas.png' alt='' />
            </div>
            <p className='py-2'>Adidas</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/nike.png' alt='' />
            </div>
            <p className='py-2'>Nike</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/puma.png' alt='' />
            </div>
            <p className='py-2'>Puma</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/asos.png' alt='' />
            </div>
            <p className='py-2'>Xiaomi USA</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/spalding.png' alt='' />
            </div>
            <p className='py-2'>Spalding</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/puma.png' alt='' />
            </div>
            <p className='py-2'>Puma</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/nike.png' alt='' />
            </div>
            <p className='py-2'>Nike</p>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default TopBrands;
