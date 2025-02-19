import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import OrderCard from '@/components/checkout/OrderCard';
import OrderSidebar from '@/components/order/OrderSidebar';
import ReviewCard from '@/components/checkout/ReviewCard';
import ReviewCardTo from '@/components/checkout/ReviewCardTo';

function Review() {
  const [activeTab, setActiveTab] = useState('my-review'); // Default active tab

  const tabs = [
    { id: 'my-review', label: 'My Review' },
    { id: 'to-review', label: 'To Review' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'empty':
        return (
          <EmptyState
            title="It's empty here"
            description="You haven't saved any address yet. Add new address to get started."
            buttonText='Shop Now'
          />
        );
      case 'my-review':
        return (
          <div className='mt-10'>
            {/* Example: Order in progress */}
            <ReviewCard status='inProgress' />
          </div>
        );
      case 'to-review':
        return (
          <div className='mt-10'>
            {/* Example: Completed Orders */}
            <ReviewCardTo status='Completed' />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <CustomSection>
        <div className='flex flex-col md:flex-row gap-5'>
          <div class='md:w-1/3 border-r'>
            <aside className=' bg-gray-100  pr-8 '>
              <OrderSidebar />
            </aside>
          </div>
          {/* Main Content */}
          <div className='md:w-4/5'>
            <main className='flex-1 pl-6'>
              <h1 className='text-xl font-bold'>Reviews</h1>

              {/* Order Status Tabs */}
              <div className='mt-4 flex space-x-4'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      activeTab === tab.id
                        ? 'bg-blue-50 border-primary text-primary font-semibold'
                        : 'border-gray-400 text-gray-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Based on Active Tab */}
              {renderContent()}
            </main>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}

export default Review;

/* ----- Empty State Component ----- */
const EmptyState = ({ title, description, buttonText }) => (
  <div className='flex rounded-lg bg-white flex-col items-center justify-center h-96 mt-10'>
    <img src='/assets/order/empty.png' alt='Empty' className='w-32 h-32' />
    <p className='text-md font-semibold mt-3'>{title}</p>
    <p className='text-gray-500 text-sm my-2'>{description}</p>
    <button className='mt-5 bg-primary text-white px-6 py-2 rounded-lg'>
      {buttonText}
    </button>
  </div>
);
