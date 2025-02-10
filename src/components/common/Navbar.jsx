import React from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { GoBell } from 'react-icons/go';
import { TfiHeart } from 'react-icons/tfi';
import { IoCartOutline } from 'react-icons/io5';
function Navbar() {
  return (
    <nav>
      <div className='bg-dark-2  text-white'>
        <div class='container  text-xs h-[40px]   flex items-center justify-between'>
          <div class='flex space-x-4'>
            <a href='#' class='hover:underline'>
              Open Sponsorship
            </a>
            <a href='#' class='hover:underline'>
              Call Center
            </a>
            <a href='#' class='hover:underline'>
              Help
            </a>
            <a href='#' class='hover:underline'>
              Tutorial
            </a>
          </div>
          <div class='flex space-x-4'>
            <a href='#' class='hover:underline'>
              Be Partners
            </a>
            <a href='#' class='hover:underline'>
              Open Shop
            </a>
            <a
              className='flex items-center justify-between space-x-0'
              href='#'
              class='hover:underline'
            >
              <span> Download</span>
              <HiMiniChevronDown className='text-lg' />
            </a>
            <a
              className='flex items-center justify-between space-x-0'
              href='#'
              class='hover:underline'
            >
              <span> English</span>
              <HiMiniChevronDown className='text-lg' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-white shadow-md'>
        <div class=' container  py-4  flex items-center justify-between'>
          <img src='/assets/logo.svg' />

          <div class='flex items-center space-x-2 w-1/2'>
            <button class='bg-primary text-sm font-thin text-white px-4 py-2 rounded-md flex items-center justify-center'>
              <span>Category</span>
              <HiMiniChevronDown className='text-lg' />
            </button>
            <input
              type='text'
              placeholder='Search'
              class='w-full px-3 py-2 border rounded-md focus:outline-none'
            />
            {/* <button class='p-2'>🔍</button> */}
          </div>

          <div class='flex items-center space-x-6'>
            <button class='relative'>
              <GoBell className='text-xl text-gray-500' />
              <span class='absolute -top-2 -right-2 text-red-500  text-xs px-1 rounded-full'>
                •
              </span>
            </button>
            <button>
              <TfiHeart className='text-md text-gray-500' />
            </button>
            <button>
              <IoCartOutline className='text-2xl text-gray-500' />
            </button>

            <div class='flex items-center space-x-2'>
              <div class='w-8 h-8 bg-gray-300 rounded-full'></div>
              <div>
                <p class='text-sm font-semibold'>Pikachu</p>
                <p class='text-xs text-green-500'>Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='bg-white border-t py-3 px-6 flex justify-center space-x-6 text-gray-600 text-sm'>
        <a href='#' class='text-blue-600 font-semibold'>
          Product
        </a>
        <a href='#'>Flash Sale</a>
        <a href='#'>Best Sellers</a>
        <a href='#'>Blog</a>
        <a href='#'>About Us</a>
        <a href='#'>Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
