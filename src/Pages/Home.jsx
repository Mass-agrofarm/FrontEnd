// Dependencies
// Importing essential modules and components used in this page
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
// Importing Hero component for main banner and structured containers for layout sections
import Hero from '@components/Home/Hero';
import { MainSection, FeaturedProductsSection, TestimonialsSection } from '@/Components/Home/StyledContainers';
import { ProductCardsContainer, ReviewContainer } from '@components/ProductComponents/StyledContainers';
import ProductCards from '@components/ProductComponents/ProductCards';
import CustomerReviews from '@components/CustomerReview/CustomerReviews';

// General styling components
import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import Divider from '@components/Divider';

// Assets
// Importing images for visual assets
import mamaMbogaKiosk from '@assets/Images/mama-mboga.jpg';

// Data
// Importing external JSON data containing customer testimonials
import customerTesimonials from '../customerReviews.json';
// Importing static product and review data from JSON files
import productsData from '../productData.json'; 

// Main Component Function
// Function for rendering the Home page component
function Home () {
  // State Hook for Customer Testimonials
  // State to hold product data
  const [data, setData] = useState(null); // Initializes 'data' state as null, to be set with modified product data
  const [reviews, setReviews] = useState(null); // Initializes 'reviews' state as null, to be set with testimonial data

  /**
   * @brief Fetches and processes product data on component mount.
   *        Slices a range of products to display.
   *        Also fetches customer testimonials data.
   */
  useEffect(() => {
    try {
      // Check if productsData and customerTesimonials have the expected structure
      if (productsData && productsData.products && customerTesimonials) {

        // Slice the featured product data to display only a specified range
        const slicedProducts = productsData.featured.slice(0, 4);
        // Slice and reverse the product data to display only a specified range
        const slicedTestimonials = customerTesimonials.testimonials.slice(5, 8);

        // Update state with processed product data and full testimonials data
        setData({'products': slicedProducts}); // Set 'data' with sliced and reversed products array
        setReviews({'testimonials': slicedTestimonials}); // Set 'reviews' with testimonials data
      } else {
        throw new Error('Products data not found'); // Throw error if data is not structured as expected
      }
    } catch (error) {
      console.error('Error loading data:', error); // Log any errors that occur during data fetching
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className='shell'>
      {/* ! Hero Section */}
      {/* Main hero banner introducing the company */}
      <Hero />

      {/* ! Main Section */}
      {/* Section providing a brief about the company */}
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
            <img src={mamaMbogaKiosk} alt="Kiosk image"/> {/* Displaying the kiosk image */}
          </div>
        </div>
      </MainSection>

      {/* ! Featured Products Section */}
      {/* Highlights selected products and links to full product page */}
      <FeaturedProductsSection>
        <div className="header">
          <h1>Featured Products</h1>
        </div>
        <ProductCardsContainer>
          {/* Product Cards for displaying featured products */}
          <ProductCards data={data}/>
        </ProductCardsContainer>
        <div className="link">
          <Link to="/products">See more...</Link>
        </div>
      </FeaturedProductsSection>

      {/* ! Divider */}
      {/* Visual divider between sections */}
      <Divider />

      {/* ! Testimonials Section */}
      {/* Showcases customer testimonials for social proof */}
      <TestimonialsSection>
        <FlexDiv className="title" style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2>Testimonials From Our Customers</h2>
          <p>Hear from our satisfied customers who have experienced significant improvements in their farming practices and business operations thanks to our products.</p>
        </FlexDiv>
        <ReviewContainer>
          {/* Customer review cards displaying feedback from testimonials data */}
          <CustomerReviews data={reviews} />
        </ReviewContainer>
      </TestimonialsSection>

      {/* ! End of Main Sections */}
    </div>
  )
}

export default Home
