//dependancies
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Hero from '@components/Home/Hero';
import { MainSection, FeaturedProductsSection, TestimonialsSection } from '@/Components/Home/StyledContainers';
import { ProductCardsContainer } from '@components/ProductComponents/StyledContainers';
import ProductCards from '@components/ProductComponents/ProductCards';
import CustomerReviews from '@components/CustomerReviews';

import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import Divider from '@components/Divider';

// assets.
import mamaMbogaKiosk from '@assets/mama-mboga-kiosk.jpg';


function Home () {
  return (
    <div className='shell'>
      {/* ! Hero */}
      <Hero />

      {/* ! Main sections */}
      <MainSection>
        <div className='shell'>
          <div className='text'>
            <h1>About us</h1>
            <p>
            Mars Agrofarm & Supplies Ltd is committed to empowering smallholder farmers and small-scale vendors. Our focus on innovation and sustainability drives us to provide high-quality agricultural solutions that enhance productivity and promote social impact.
            </p>
            <Link to='/about'>More About us</Link>
          </div>
          <div className='image'>
            <img src={mamaMbogaKiosk}/>
          </div>
        </div>
      </MainSection>



      <FeaturedProductsSection>
        <div className="header">
          <h1>Featured Products</h1>
        </div>
        <ProductCardsContainer>

          {/* Remember to delete cards except for one. */}

          <ProductCards/>
          <ProductCards/>
          <ProductCards/>
          <ProductCards/>
        </ProductCardsContainer>
        <div className="link">
          <Link to="/products">See more...</Link>
        </div>
      </FeaturedProductsSection>

      {/* ! divider */}
      <Divider />

      <TestimonialsSection>
        <FlexDiv className="title" style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2>Testimonials From Our Customers</h2>
          <p>Hear from our satisfied customers who have experienced significant improvements in their farming practices and business operations thanks to our products.</p>
        </FlexDiv>
        <div className="review-cards">
          {/** Customer review cards */}
          <CustomerReviews/>
          <CustomerReviews/>
          <CustomerReviews/>
        </div>
      </TestimonialsSection>
      {/* ! end Main sections */}

    </div>
  )
}

export default Home
