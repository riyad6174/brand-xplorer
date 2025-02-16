import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

function CartCard() {
  return (
    <div className='w-full flex items-center justify-between gap-4  py-4'>
      <div className='flex items-center gap-5'>
        <input id='product1' type='checkbox' className='w-5 h-5 rounded-lg' />
        <img
          className='h-[100px] w-[100px] object-cover rounded-lg'
          src='/assets/product/product2.png'
          alt='Product image'
        />
        <div className='flex flex-col gap-2'>
          <span className='font-bold font-mont'>
            Logitech G435 Gaming Headset
          </span>
          <span className='text-gray-400'>Central Jakarta</span>
          <span className='font-mont font-bold'>$280</span>
        </div>
      </div>

      <div className='flex justify-between items-center gap-4'>
        <div className='relative flex items-center max-w-[8rem] border-2 border-gray-200 rounded-lg bg-white'>
          <button
            type='button'
            id='decrement-button'
            className='hover:bg-gray-200 rounded-s-lg py-3 px-4 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none'
          >
            <svg
              className='w-2 h-2 text-gray-900'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 2'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h16'
              />
            </svg>
          </button>
          <input
            type='text'
            id='quantity-input'
            className='h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5'
            placeholder='999'
            required
            value={1}
            readOnly
          />
          <button
            type='button'
            id='increment-button'
            className='hover:bg-gray-200 rounded-e-lg py-3 px-4 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none'
          >
            <svg
              className='w-2 h-2 text-gray-900'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 1v16M1 9h16'
              />
            </svg>
          </button>
        </div>

        <div className='border-2 flex items-center justify-center py-[10px] px-[10px] rounded-lg cursor-pointer'>
          <HiOutlineTrash className='text-2xl' />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
