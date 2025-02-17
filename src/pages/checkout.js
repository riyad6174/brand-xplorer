import CartBrandCard from '@/components/checkout/CartBrandCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import { PiSealPercentFill } from 'react-icons/pi';
import React from 'react';
import Related from '@/components/checkout/Related';
import CheckoutCard from '@/components/checkout/CheckoutCard';
import { HiOutlinePencil } from 'react-icons/hi';
import DeliveryInfoCard from '@/components/checkout/DeliveryInfoCard';
function checkout() {
  return (
    <div>
      <Navbar />
      <CustomSection>
        <div class=' mx-auto '>
          <div class='flex flex-col md:flex-row gap-5'>
            <div class='md:w-4/5'>
              <div class='bg-white  p-6 mb-4 rounded-lg shadow '>
                <div className='flex items-center justify-between '>
                  <p className='pt-1 pb-4 text-sm font-semibold'>
                    Delivery Address
                  </p>
                  <HiOutlinePencil className='text-lg text-primary' />
                </div>
                <DeliveryInfoCard />
              </div>
              <div class='bg-white  p-6 mb-4 rounded-lg shadow '>
                <p className='py-1 font-semibold'>Product</p>
                <CheckoutCard />
                <CheckoutCard />
              </div>
            </div>
            <div class='md:w-1/3'>
              <div class='bg-white rounded-lg shadow-md p-6'>
                <div className=' '>
                  <h2 class='text-sm    font-semibold mb-4'>Payment Method</h2>
                </div>
                <div>
                  <div className='flex items-center gap-3 py-2'>
                    <input id='cod' type='radio' />
                    <label
                      htmlFor='cod'
                      className='text-xs px-6 py-3 border border-gray-400 bg-gray-50 rounded-lg'
                    >
                      {' '}
                      Cash on Delivery
                    </label>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <input id='bkash' type='radio' />
                    <label
                      htmlFor='bkash'
                      className='text-xs px-2 flex items-center justify-start py-1 border border-gray-400 bg-gray-50 rounded-lg'
                    >
                      {' '}
                      <div className='flex items-center gap-x-2 py-1 pl-2 pr-14'>
                        <img src='/assets/checkout/money.svg' />
                        <span>Bkash</span>
                      </div>
                    </label>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <input id='ssl' type='radio' />
                    <label
                      htmlFor='ssl'
                      className='text-xs px-5 py-2 border border-gray-400 bg-gray-50 rounded-lg'
                    >
                      {' '}
                      <img src='/assets/checkout/ssl.svg' />
                    </label>
                  </div>
                </div>
                <button class='bg-primary text-xs text-white py-3 px-4 rounded-lg mt-4 w-full'>
                  Checkout
                </button>
              </div>
              <div class='bg-white rounded-lg shadow-md p-6'>
                <div className='pb-3'>
                  <h2 class='text-lg font-semibold mb-3'>Product Summary</h2>
                </div>
                <p className='font-semibold text-sm'>Order Summary</p>

                <div className='py-4 font-thin text-[16px]'>
                  <div class='flex justify-between mb-1'>
                    <span>Subtotal</span>
                    <span>$19.99</span>
                  </div>
                  <div class='flex justify-between mb-1'>
                    <span>VAT</span>
                    <span>$1.99</span>
                  </div>
                  <div class='flex justify-between mb-1'>
                    <span>Delivary fee</span>
                    <span>$0.00</span>
                  </div>
                  <div class='flex justify-between mb-2 pb-2 border-b-2 border-dotted'>
                    <span>Promo & Discount</span>
                    <span className='text-red-500'>-$10.00</span>
                  </div>
                  <div class='flex justify-between border-t-2 pt-2 border-dotted'>
                    <span class=' text-md font-semibold'>Total Bill</span>
                    <span class='text-md font-semibold'>$21.98</span>
                  </div>
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
                <div className='flex items-center justify-between py-3 text-xs text-gray-500'>
                  <span>Item : 03</span>
                  <span>
                    Total :{' '}
                    <span className='text-accent font-semibold text-lg'>
                      $4622
                    </span>
                  </span>
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

export default checkout;
