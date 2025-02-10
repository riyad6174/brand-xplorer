import Navbar from '@/components/common/Navbar';
import FlashSale from '@/components/home/FlashSale';
import Hero from '@/components/home/Hero';
import TopBrands from '@/components/home/TopBrands';
import React from 'react';

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopBrands />
      <FlashSale />
    </div>
  );
}

export default index;
