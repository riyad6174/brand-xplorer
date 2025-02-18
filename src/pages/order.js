import React, { useState } from 'react';
import CartBrandCard from '@/components/checkout/CartBrandCard';
import Navbar from '@/components/common/Navbar';
import CustomSection from '@/components/layout/CustomSection';
import Related from '@/components/checkout/Related';
import CheckoutCard from '@/components/checkout/CheckoutCard';
import DeliveryInfoCard from '@/components/checkout/DeliveryInfoCard';
import OrderCard from '@/components/checkout/OrderCard';

function Order() {
  const [activeTab, setActiveTab] = useState('in-progress'); // Default active tab

  const tabs = [
    { id: 'waiting-payment', label: 'Waiting Payment' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'complete', label: 'Complete' },
    { id: 'canceled', label: 'Canceled' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'waiting-payment':
        return (
          <EmptyState
            title="It's empty here"
            description="You haven't saved any address yet. Add new address to get started."
            buttonText='Shop Now'
          />
        );
      case 'in-progress':
        return (
          <div className='mt-10'>
            {/* Example: Order in progress */}
            <OrderCard status='inProgress' />
          </div>
        );
      case 'complete':
        return (
          <div className='mt-10'>
            {/* Example: Completed Orders */}
            <OrderCard status='Completed' />
          </div>
        );
      case 'canceled':
        return (
          <EmptyState
            title='No Canceled Orders'
            description='You have no canceled orders at the moment.'
            buttonText='Browse Products'
          />
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
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className='md:w-4/5'>
            <main className='flex-1 pl-6'>
              <h1 className='text-xl font-bold'>My Orders</h1>

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

export default Order;

/* ----- Sidebar Component ----- */
const Sidebar = () => (
  <div className='md:w-1/3 border-r'>
    <aside className='bg-gray-100 pr-8'>
      <nav>
        <SidebarSection title='General'>
          <SidebarItem label='My Profile' />
          <SidebarItem label='Address' />
        </SidebarSection>

        <SidebarSection title='Order'>
          <SidebarItem label='My Orders' active />
        </SidebarSection>

        <SidebarSection title='Others'>
          <SidebarItem label='Reviews' />
          <SidebarItem label='Followed Shop' />
          <SidebarItem label='Credit Score' />
          <SidebarItem label='Refer & Earn' />
          <SidebarItem label='Become Seller / My Store' />
        </SidebarSection>

        <SidebarSection title='Preferences'>
          <SidebarItem label='Notifications' />
        </SidebarSection>
      </nav>
    </aside>
  </div>
);

/* ----- Sidebar Components ----- */
const SidebarSection = ({ title, children }) => (
  <>
    <h2 className='text-md font-semibold my-4'>{title}</h2>
    <ul className='space-y-2'>{children}</ul>
  </>
);

const SidebarItem = ({ label, active }) => (
  <li
    className={`p-3 bg-white text-gray-500 hover:bg-gray-200 rounded-md text-sm ${
      active ? 'font-semibold' : ''
    }`}
  >
    {label}
  </li>
);

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
