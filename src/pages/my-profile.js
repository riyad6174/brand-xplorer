import ProfileCard from '@/components/card/ProfileCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import OrderSidebar from '@/components/order/OrderSidebar';
import React from 'react';

function my_profile() {
  return (
    <div>
      <Navbar />
      <CustomSection>
        <div class='flex flex-col md:flex-row gap-5'>
          <div class='md:w-1/3 border-r'>
            <aside className=' bg-gray-100  pr-8 '>
              <OrderSidebar />
            </aside>
          </div>
          <div class='md:w-4/5'>
            <main className='flex-1 pl-6'>
              <h1 className='text-xl font-bold'>My Profile</h1>

              {/* Empty State for waiting payment */}
              <div className='flex rounded-lg bg-white  items-center justify-center h-72 mt-10'>
                <ProfileCard />
              </div>
            </main>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default my_profile;
