import ProfileCard from '@/components/card/ProfileCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import OrderSidebar from '@/components/order/OrderSidebar';
import GenerateLink from '@/components/refer/GenerateLink';
import ReferAndEarn from '@/components/refer/ReferAndEarn';
import ReferFriendCard from '@/components/refer/ReferFriendCard';
import RewardPointCard from '@/components/refer/RewardPointCard';
import React from 'react';

function refer() {
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
            <main className='flex-1 pl-3'>
              {/* Empty State for waiting payment */}
              <div className=' flex flex-col gap-5 '>
                <ReferFriendCard />
                <RewardPointCard />
                <GenerateLink />
                <ReferAndEarn />
              </div>
            </main>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default refer;
