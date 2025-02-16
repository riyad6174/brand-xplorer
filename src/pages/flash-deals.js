import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import React from 'react';
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoClock,
} from 'react-icons/go';
import ProductCard from '@/components/product/ProductCard';
import Footer from '@/components/common/Footer';
function flash_deals() {
  return (
    <>
      <Navbar />
      <CustomSection>
        <div className='mb-5 bg-[#ECF0FC] py-5 px-8 rounded-md flex items-center justify-between '>
          <span className='text-xl font-normal text-gray-800'>
            Sign up for news & get 20% off
          </span>
          <button className='uppercase flex gap-4 items-center justify-between text-sm font-semibold py-2 px-4 rounded-lg border border-gray-500'>
            <span> Get Started</span>
            <GoChevronRight className='text-lg' />
          </button>
        </div>
        {/* flash banner */}
        <div className='mb-5 bg-[#ACB6AC] py-6 px-8 rounded-md flex items-center justify-between '>
          <span className='text-xl font-normal text-gray-800'>
            THE GREAT EGEO
          </span>
          <span className='text-[50px] font-bold text-gray-800'>
            Flash Sale
          </span>
          <div className='text-xl text-white font-normal gap-y-3  flex items-start flex-col'>
            <span className='text-[50px]'>UP TO 70% OFF</span>
            <span className='text-[18px] font-thin'>
              CUSTOMIZE YOUR SHOPPING BELOW
            </span>
          </div>
          <button className='uppercase bg-white flex gap-4 items-center justify-between text-sm font-semibold py-2 px-4 rounded-lg border border-gray-200'>
            <span> Start Now</span>
            <GoChevronRight className='text-lg' />
          </button>
        </div>
        <div className='flex items-center justify-between py-10'>
          <div className='text-2xl font-semibold flex items-center justify-start gap-3'>
            <span>Ends In</span>
            <span className='bg-green-100 rounded-2xl text-sm py-1 px-2 text-green-600 flex items-center justify-center gap-2'>
              <GoClock />
              <p>02:04:56</p>
            </span>
          </div>
          <div>
            <div className='flex gap-5 items-center justify-end'>
              <input
                className='py-2 border rounded-md px-4'
                placeholder='Search'
              />
              <div className='bg-white  rounded-md border py-[10px] px-5 flex items-center justify-between gap-2'>
                <span className='text-sm font-semibold'>Filter</span>
                <GoChevronDown />
              </div>
            </div>
          </div>
        </div>
        {/* filters */}
        <div className='flex items-center justify-start gap-3 pb-6'>
          <button className='bg-primary text-sm text-white font-semibold px-6 py-1 rounded-sm'>
            All Store{' '}
          </button>
          <button className='bg-white text-sm font-semibold px-6 py-1 rounded-sm'>
            Shorts{' '}
          </button>
          <button className='bg-white text-sm font-semibold px-6 py-1 rounded-sm'>
            Man{' '}
          </button>
          <button className='bg-white text-sm font-semibold px-6 py-1 rounded-sm'>
            Women{' '}
          </button>
          <button className='bg-white text-sm font-semibold px-6 py-1 rounded-sm'>
            Popular{' '}
          </button>
          <button className='bg-white text-sm font-semibold px-6 py-1 rounded-sm'>
            Newest{' '}
          </button>
        </div>
        <div className='grid grid-cols-5 gap-6 mb-10'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </CustomSection>
      <Footer />
    </>
  );
}

export default flash_deals;
