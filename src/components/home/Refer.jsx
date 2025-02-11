import React from 'react';
import CustomSection from '../layout/CustomSection';
import { FaChevronRight } from 'react-icons/fa6';

function Refer() {
  return (
    <div>
      <CustomSection>
        <div className='px-10 flex items-center justify-between bg-white py-6'>
          <div>
            <p className='font-bold'>Refer & Earn</p>
            <p className='text-sm text-gray-500'>
              Tell your friend about the site and get amazing gifts
            </p>
          </div>
          <FaChevronRight className='text-gray-4  00' />
        </div>
      </CustomSection>
    </div>
  );
}

export default Refer;
