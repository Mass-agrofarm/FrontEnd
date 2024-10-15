// dependancies and tools
// import React, { Suspense, useState } from 'react';


//* components
import ProductCards from '@components/ProductComponents/ProductCards';
import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import CustomerReviews from '@components/CustomerReviews';



//* custom components
import Divider from '@components/Divider';
import { ProductCardsContainer } from '@/Components/ProductComponents/StyledContainers';




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
      <FlexDiv style={{ justifyContent: 'center', marginBottom: '100px', backgroundColor: 'whitesmoke', color: '#213547' }}>
        <h1>Our Products</h1>
      </FlexDiv>
      <ProductCardsContainer>
        {/* Remember to remove the extra cards, delete all except one ProductCards components. */}
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

      {/* Divider */}
      <div style={{ marginTop: '50px' }}>
        <Divider />
      </div>
      
      <section style={{ display: 'flex', flex: '1', flexDirection: 'column'}}>
        <FlexDiv style={{ justifyContent: 'center' }}>
          <h1>Customer Reviews</h1>
        </FlexDiv>
        <FlexDiv style={{ justifyContent: 'center', gap: '20px', marginBottom: '50px'}}>
            {/** Customer review cards */}
            <CustomerReviews />
            <CustomerReviews />
            <CustomerReviews />
        </FlexDiv>
      </section>
    </>
  )
}

export default Products