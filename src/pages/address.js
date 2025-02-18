import AddressList from '@/components/card/AddressList';
import ProfileCard from '@/components/card/ProfileCard';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import React from 'react';

function address() {
  return (
    <div>
      <Navbar />
      <CustomSection>
        <div class='flex flex-col md:flex-row gap-5'>
          <div class='md:w-1/3 border-r'>
            <aside className=' bg-gray-100  pr-8 '>
              <nav>
                <h2 className='text-md font-semibold mb-4'>General</h2>
                <ul className='space-y-2'>
                  <li className='p-3 bg-primary text-white hover:bg-blue-500 rounded-md text-sm'>
                    My Profile
                  </li>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Address
                  </li>
                </ul>
                <h2 className='text-md font-semibold my-4'>Order</h2>
                <ul className='space-y-2'>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm font-semibold'>
                    My Orders
                  </li>
                </ul>
                <h2 className='text-md font-semibold my-4'>Others</h2>
                <ul className='space-y-2'>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Reviews
                  </li>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Followed Shop
                  </li>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Credit Score
                  </li>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Refer & Earn
                  </li>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Become Seller / My Store
                  </li>
                </ul>
                <h2 className='text-md font-semibold my-4'>Preferances</h2>
                <ul className='space-y-2'>
                  <li className='p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm'>
                    Not
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
          <div class='md:w-4/5'>
            <main className='flex-1 pl-6'>
              <h1 className='text-xl font-bold'>My Profile</h1>

              {/* Empty State for waiting payment */}
              <div className='flex rounded-lg bg-white  items-center justify-center  mt-10'>
                <AddressList />
              </div>
            </main>
          </div>
        </div>
      </CustomSection>
      <Footer />
    </div>
  );
}

export default address;
