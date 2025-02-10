import React from 'react';

import { HiHeart } from 'react-icons/hi2';
import { TbShoppingCartHeart } from 'react-icons/tb';
import { FaStarHalfStroke } from 'react-icons/fa6';
const ProductCard = () => {
  return (
    <div className='bg-white shadow-md rounded-xl p-3 w-56'>
      {/* Product Image Section */}
      <div className='relative'>
        <img
          src='/assets/product/product1.png' // Replace with actual image
          alt='Puff-Sleeved Cotton Satin Kurti'
          className='w-full h-44 object-cover rounded-lg'
        />
        {/* Wishlist & Cart Icons */}
        <button className='absolute top-2 left-2   p-2  '>
          <HiHeart className='text-accent text-2xl ' />
        </button>
        <button className='absolute top-2 right-2 bg-white p-2 rounded-md '>
          <TbShoppingCartHeart className='text-gray-600' />
        </button>
      </div>

      {/* Product Details */}
      <h3 className='text-gray-900 font-semibold text-sm mt-2'>
        Puff-Sleeved Cotton Satin Kurti
      </h3>

      {/* Ratings & Sales */}
      <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
        <FaStarHalfStroke className='text-gray-700 mr-1' />
        <span>4.7</span>
        <span className='mx-2'>|</span>
        <span className='bg-gray-100 px-2 py-1 font-semibold rounded text-xs'>
          482 sold
        </span>
      </div>

      {/* Pricing */}
      <div className='mt-2 flex items-center space-x-2'>
        <span className='text-accent text-lg font-bold'>$385.00</span>
        <span className='text-gray-500 line-through text-sm'>$485.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
