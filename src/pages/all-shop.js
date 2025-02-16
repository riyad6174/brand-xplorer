import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import React from 'react';
import { GoChevronDown } from 'react-icons/go';

function all_shop() {
  return (
    <>
      <Navbar />
      <CustomSection>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-semibold'>All Shop</div>
          <div>
            <div className='flex gap-5 items-center justify-end'>
              <input
                className='py-2 border rounded-md px-4'
                placeholder='Search'
              />
              <div className='bg-white  rounded-md border py-3 px-5 flex items-center justify-between gap-2'>
                <span className='text-xs font-semibold'>All Store</span>
                <GoChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 py-16'>
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
              <img src='/assets/brands/nb.png' alt='' />
            </div>
            <p className='py-2'>New Balance</p>
          </div>
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
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/brands/spalding.png' alt='' />
            </div>
            <p className='py-2'>Spalding</p>
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
    </>
  );
}

export default all_shop;
