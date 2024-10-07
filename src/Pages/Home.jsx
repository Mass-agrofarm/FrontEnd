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
import { P } from '../Components/StyledComponents/StyledElements';




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
            <P style={{ width: '450px', marginBottom: '60px' }}>
            Mars Agrofarm & Supplies Ltd is committed to empowering smallholder farmers and small-scale vendors. Our focus on innovation and sustainability drives us to provide high-quality agricultural solutions that enhance productivity and promote social impact.
            </P>
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
        <FlexDiv style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ margin: '50px 0px 0px 0px' }}>Testimonials From Our Customers</h2>
          <P>Hear from our satisfied customers who have experienced significant improvements in their farming practices and business operations thanks to our products.</P>
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
