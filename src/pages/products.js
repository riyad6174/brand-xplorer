import Navbar from '@/components/common/Navbar';
import CategorySliderTop from '@/components/productPage/CategorySliderTop';
import ProductFilter from '@/components/productPage/ProductFilter';
import ProductSection from '@/components/productPage/ProductSection';
import React from 'react';

function products() {
  return (
    <div>
      <Navbar />
      <CategorySliderTop />
      <ProductFilter />
      <ProductSection />
    </div>
  );
}

export default products;
