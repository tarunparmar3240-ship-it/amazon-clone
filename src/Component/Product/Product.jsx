import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ProductMobile from './ProductMobile/ProductMobile';
import ProductDesktop from './ProductDesktop/ProductDesktop';

const Product = () => {
  const isMobile = useMediaQuery({maxWidth: 767});

  return isMobile ? <ProductMobile /> : <ProductDesktop />;
}

export default Product