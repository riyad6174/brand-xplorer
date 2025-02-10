import React from 'react';
import CustomSection from '../layout/CustomSection';
import { FaArrowRight, FaClock } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import ProductCard from '../product/ProductCard';

function FlashSale() {
  return (
    <CustomSection>
      <div className='bg-[#E9ECF8] px-10 py-6 rounded-md'>
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center justify-start gap-4'>
            <h2 className='text-2xl font-semibold'>Flash Sale</h2>
            <span className='bg-green-100 rounded-2xl py-1 px-2 text-green-600 flex items-center justify-center gap-2'>
              <GoClock />
              <p>02:04:56</p>
            </span>
          </div>
          <div className='flex items-center justify-center gap-3 text-xs font-semibold'>
            <span>More</span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className='grid grid-cols-5 gap-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </CustomSection>
  );
}

export default FlashSale;
