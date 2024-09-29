//dependancies
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Hero from '../Components/Home/Hero';
import ProductCards from '../Components/ProductComponents/ProductCards';
import { ProductCardsContainer } from './Products';
import { FlexDiv } from '../Components/StyledComponents/StyledContainers';
import CustomerReviews from '../Components/CustomerReviews';
import Divider from '../Components/Divider';




function Home () {
  return (
    <>
      {/* ! Hero */}
      <Hero />

      {/* ! Main sections */}
      <section style={{ height: '80vh', padding: '0px 96px', marginTop: '96.16px' }}>
        <FlexDiv>
          <div style={{ alignContent: 'flex-start', paddingRight: '90px', alignItems: 'center' }}>
            <h1>About us</h1>
            <p style={{ width: '450px', marginBottom: '60px' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dignissimos doloremque dicta officia a adipisci rerum natus voluptas sequi impedit necessitatibus aut neque eveniet dolore numquam culpa, tempore repudiandae ullam.
            </p>
            <Link style={{ backgroundColor: 'whitesmoke', padding: '8px 44.16px', borderRadius: '15px'}} to='/about'>More About us</Link>
          </div>
          <div style={{ alignContent: 'flex-end'}}>
            <img style={{ width: '100%', borderRadius: '15px'}} src="/public/pexels-nicolasveithen-1719669.jpg"/>
          </div>
          <br style={{ border: '1px solid #ccc' }}></br>
        </FlexDiv>
      </section>


      {/* ! divider */}
      <Divider />

      <section style={{ height: '100vh', marginBottom: '126px'}}>
        <FlexDiv style={{justifyContent: 'center'}}>
          <h1>Featured Products</h1>
        </FlexDiv>
        <ProductCardsContainer>

          {/* Remember to delete cards except for one. */}

          <ProductCards/>
          <ProductCards/>
          <ProductCards/>
        </ProductCardsContainer>
        <FlexDiv style={{justifyContent: 'center'}}>
          <Link style={{ backgroundColor: 'whitesmoke', padding: '8px 44.16px', borderRadius: '15px'}}to="/products">See more...</Link>
        </FlexDiv>
      </section>

      {/* ! divider */}
      <Divider />

      <section style={{ height: '90vh'}}>
        <FlexDiv style={{ justifyContent: 'center' }}>
          <h1>Testimonials From Our Customers</h1>
        </FlexDiv>
        <FlexDiv style={{ justifyContent: 'center', gap: '20px' }}>
          {/** Customer review cards */}
          <CustomerReviews/>
          <CustomerReviews/>
          <CustomerReviews/>
        </FlexDiv>
      </section>
      {/* ! end Main sections */}

    </>
  )
}

export default Home
