import React from 'react';
import CustomSection from '../layout/CustomSection';
import SectionTitle from '../common/SectionTitle';

function Category() {
  return (
    <div className=''>
      <CustomSection>
        <SectionTitle title='Category' btnName='See all' />

        <div className='grid grid-cols-7 gap-8'>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/tshirt.png' alt='' />
            </div>
            <p className='py-2'>T Shirt</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/shorts.png' alt='' />
            </div>
            <p className='py-2'>Shorts</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/dress.png' alt='' />
            </div>
            <p className='py-2'>Dress</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/cap.png' alt='' />
            </div>
            <p className='py-2'>Cap</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/tshirt.png' alt='' />
            </div>
            <p className='py-2'>Shirt</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/hat.png' alt='' />
            </div>
            <p className='py-2'>Hat</p>
          </div>
          {/* brand card */}
          <div className='flex flex-col justify-center items-center'>
            <div className=' w-[160px] h-[160px] flex items-center justify-center   bg-white rounded-xl'>
              <img src='/assets/category/tie.png' alt='' />
            </div>
            <p className='py-2'>Tie</p>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default Category;
