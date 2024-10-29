import { useState, useEffect } from 'react'; // Importing necessary hooks for state management and side effects
import ProductCards from '@components/ProductComponents/ProductCards'; // Importing ProductCards component to display each product card
import CustomerReviews from '@components/CustomerReview/CustomerReviews'; // Importing CustomerReviews component to display customer reviews
import Divider from '@components/Divider'; // Importing Divider for separating sections
import { ProductCardsContainer, HeadingContainer, ReviewSection, ReviewContainer } from '@/Components/ProductComponents/StyledContainers'; // Importing containers for layout

// Importing static product and review data from JSON files
import productsData from '../productData.json'; 
import customerTesimonials from '../customerReviews.json';

/**
 * @function Products
 * @brief Functional component that displays products and customer reviews on the page.
 *        It fetches product data and customer testimonials, processes the product data to display a specific range,
 *        and then passes the processed data to child components for rendering.
 */
function Products() {
  // State to hold product data
  const [data, setData] = useState(null); // Initializes 'data' state as null, to be set with modified product data
  const [reviews, setReviews] = useState(null); // Initializes 'reviews' state as null, to be set with testimonial data

  /**
   * @brief Fetches and processes product data on component mount.
   *        Slices and reverses a range of products to display.
   *        Also fetches customer testimonials data.
   */
  useEffect(() => {
    try {
      // Check if productsData and customerTesimonials have the expected structure
      if (productsData && productsData.products && customerTesimonials) {
        
        // Define the start and end indices for slicing the product data
        const start = 1;
        const end = 4;
        
        // Slice and reverse the product data to display only a specified range
        const slicedTestimonials = customerTesimonials.testimonials.slice(start, end);

        // Update state with processed product data and full testimonials data
        setData(productsData); // Set 'data' with sliced and reversed products array
        setReviews({'testimonials': slicedTestimonials}); // Set 'reviews' with testimonials data
      } else {
        throw new Error('Products data not found'); // Throw error if data is not structured as expected
      }
    } catch (error) {
      console.error('Error loading data:', error); // Log any errors that occur during data fetching
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      {/* Section for displaying the main heading */}
      <HeadingContainer>
        <h1>Our Products</h1> {/* Title for the product section */}
      </HeadingContainer>

      {/* Container for the product cards */}
      <ProductCardsContainer>
        {/* Conditionally render ProductCards component if data is available */}
        {data ? (
          <ProductCards data={data} /> // Pass the modified product data to ProductCards component
        ) : (
          <p>No products to show at the moment. 😕</p> // Message if no product data is available
        )}
      </ProductCardsContainer>

      {/* Divider between product section and customer reviews */}
      <div style={{ marginTop: '50px' }}>
        <Divider /> {/* Divider component to visually separate sections */}
      </div>

      {/* Section for customer reviews */}
      <ReviewSection>
        <div className="heading">
          <h1>Customer Reviews</h1> {/* Title for the customer reviews section */}
        </div>

        {/* Flex container for displaying multiple customer reviews */}
        <ReviewContainer>
          {/* Render multiple customer reviews */}
          {reviews ? (
            <CustomerReviews data={reviews} /> // Pass testimonials data to CustomerReviews component
          ) : (
            <p>No reviews available yet 😥</p> // Message if no review data is available
          )}
        </ReviewContainer>
      </ReviewSection>
    </>
  );
}

export default Products; // Export the Products component as default
