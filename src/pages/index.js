import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Category from '@/components/home/Category';
import FlashSale from '@/components/home/FlashSale';
import Hero from '@/components/home/Hero';
import Offer from '@/components/home/Offer';
import Popular from '@/components/home/Popular';
import Products from '@/components/home/Products';
import Refer from '@/components/home/Refer';
import TopBrands from '@/components/home/TopBrands';
import Trending from '@/components/home/Trending';
import React from 'react';

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopBrands />
      <FlashSale />
      <Offer />
      <Trending />
      <Refer />
      <Popular />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}

export default index;
