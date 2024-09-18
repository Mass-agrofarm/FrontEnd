import React from 'react'

//components
import ProductCards from '../Components/ProductComponents/ProductCards'

// custom components
import { ShapeContainer } from '../Components/StyledComponents/StyledComponents'

function Products () {
  
  return (
    <ShapeContainer>
      <h1>Our Products</h1>
      <ProductCards />
    </ShapeContainer>
  )
}

export default Products