import CartBrandCard from '@/components/checkout/CartBrandCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import { PiSealPercentFill } from 'react-icons/pi';
import React from 'react';
import CartCard from '@/components/checkout/CartCard';
import Related from '@/components/checkout/Related';
function cart_checkout() {
  return (
    <div>
      <Navbar />
      <CustomSection>
        <div class=' mx-auto '>
          <div class='flex flex-col md:flex-row gap-5'>
            <div class='md:w-4/5'>
              <div class='bg-white  p-6 mb-4 rounded-lg shadow '>
                <CartBrandCard />
                <CartCard />
              </div>
              <div class='bg-white  p-6 rounded-lg shadow'>
                <CartBrandCard />
                <CartCard />
              </div>
            </div>
            <div class='md:w-1/3'>
              <div class='bg-white rounded-lg shadow-md p-6'>
                <div className='pb-6 border-b'>
                  <h2 class='text-lg font-semibold mb-4'>Product Summary</h2>
                  <p className='font-thin text-sm'>No products selected</p>
                </div>
                <div className='py-4 font-thin text-[16px]'>
                  <div class='flex justify-between mb-2'>
                    <span>Total Price</span>
                    <span>$19.99</span>
                  </div>
                  <div class='flex justify-between mb-2'>
                    <span>Total Price (Discount)</span>
                    <span>$1.99</span>
                  </div>
                  <div class='flex justify-between mb-2'>
                    <span>Tax & Fee</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <hr class='my-4' />
                <div class='flex justify-between my-4'>
                  <span class='font-semibold text-lg'>Total Price</span>
                  <span class='font-semibold'>$21.98</span>
                </div>
                <div className='border rounded-lg px-3 py-2'>
                  <div>
                    <span className='flex items-center justify-start gap-2'>
                      <PiSealPercentFill className='text-primary text-xl' />
                      <span className='text-xs'>Apply a Promo</span>
                    </span>
                  </div>
                  <input
                    type='text'
                    placeholder='Enter Code'
                    className='py-2 px-2 border w-full mt-3 mb-2 rounded-lg placeholder:text-sm bg-gray-50'
                  />
                </div>
                <button class='bg-primary text-xs text-white py-3 px-4 rounded-lg mt-4 w-full'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
      <Related />
    </div>
  );
}

export default cart_checkout;
