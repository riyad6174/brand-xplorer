import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import React from 'react';
import { GoChevronDown } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import SpecialOffer from '@/components/shopDetails/SpecialOffer';
import ProductCard from '@/components/product/ProductCard';
import Footer from '@/components/common/Footer';
function shop_details() {
  return (
    <>
      <Navbar />
      <CustomSection>
        <div className='bg-white py-10 rounded-lg'>
          <div className='max-w-sm mx-auto   '>
            <div className='flex items-start justify-between'>
              <div className='flex items-center justify-between gap-3'>
                <div className='px-4 py-5 bg-gray-100 rounded-md'>
                  <img
                    src='/assets/brands/adidas.png'
                    alt='adidas'
                    className='w-10 h-7 '
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-3xl font-bold'>Adidas</span>
                  <span className='text-gray-500 text-sm'>
                    Delivery in 1-5 Days
                  </span>
                </div>
              </div>
              <div className='py-2 px-6 border rounded-lg border-gray-700'>
                Feedback
              </div>
            </div>
            <div className='flex items-center justify-between gap-3 py-5'>
              <div className='flex text-gray-500 items-center justify-center flex-col'>
                <span className='text-xl'>234K</span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className='w-[1px] h-[60px] bg-gray-400'></div>

              <div className='flex text-gray-500 items-center justify-center flex-col'>
                <span className='text-xl'>467</span>
                <span className='text-sm'>Products</span>
              </div>
              <div className='w-[1px] h-[60px] bg-gray-400'></div>

              <div className='flex text-gray-500 items-center justify-center flex-col'>
                <div className='text-xl flex items-center gap-2'>
                  <FaStar className='text-yellow-500' />
                  <span>4.8</span>
                </div>
                <span className='text-sm'>Rating</span>
              </div>
            </div>
            {/* buttons */}
            <div className='flex items-center justify-between '>
              <button className='py-2 font-semibold px-14 bg-primary rounded-lg text-white border border-primary'>
                Follow
              </button>
              <button className='py-2 font-semibold px-14 bg-white rounded-lg text-gray-700 border border-primary'>
                Message
              </button>
            </div>
          </div>
        </div>

        {/* special offer */}
        <SpecialOffer />

        <div className='flex items-center justify-between py-10'>
          <div className='text-2xl font-semibold'>Products</div>
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
        <div className='grid grid-cols-5 gap-6 mb-10'>
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

export default shop_details;
