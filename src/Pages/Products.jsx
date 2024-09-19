// dependancies and tools
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';

//components
import ProductCards from '../Components/ProductComponents/ProductCards';

// custom components
import { ShapeContainer } from '../Components/StyledComponents/StyledComponents';

// Custom styled components.
export const ProductCardsContainer = styled(ShapeContainer)`
    /* products container gap */
    gap: 1.5em;
`

function Products () {
  /* const [data, setData] = useState([])
  
  const fetchData = async () => {
    let req = await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>console.log(json))
        setData({...req})
    }

  fetchData() */

  return (
    <>
      <h1 style={{ paddingLeft: '50px'}}>Our Products</h1>
      <ProductCardsContainer>
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
      </ProductCardsContainer>
    </>
  )
}

export default Products