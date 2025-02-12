import React from 'react';
import CustomSection from '../layout/CustomSection';
import { FaArrowRight, FaClock } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import ProductCard from '../product/ProductCard';

function Trending() {
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

export default Trending;
