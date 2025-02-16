import CartBrandCard from '@/components/checkout/CartBrandCard';
import CartCard from '@/components/checkout/cartCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import React from 'react';
function cart_checkout() {
  return (
    <div>
      <Navbar />
      <CustomSection>
        <div class='  '>
          <div class=' mx-auto '>
            <div class='flex flex-col md:flex-row gap-4'>
              <div class='md:w-3/4'>
                <div class='bg-white  p-6 mb-4 rounded-lg shadow '>
                  <CartBrandCard />
                  <CartCard />
                </div>
                <div class='bg-white  p-6 rounded-lg shadow'>
                  <CartBrandCard />
                  <CartCard />
                </div>
              </div>
              <div class='md:w-1/4'>
                <div class='bg-white rounded-lg shadow-md p-6'>
                  <div className='pb-6 border-b'>
                    <h2 class='text-lg font-semibold mb-4'>Product Summary</h2>
                    <p className='font-thin text-sm'>No products selected</p>
                  </div>
                  <div className='py-4 font-thin text-md'>
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
                  <hr class='my-2' />
                  <div class='flex justify-between mb-2'>
                    <span class='font-semibold'>Total</span>
                    <span class='font-semibold'>$21.98</span>
                  </div>
                  <button class='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full'>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default cart_checkout;
