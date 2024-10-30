/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react';
import './productStyles.css';
import { P } from '../StyledComponents/StyledElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProductCards = ({ data }) => {
  // Ensure that 'data' and 'data.products' exist before trying to map over them
  if (!data || !Array.isArray(data.products)) {
    return <div>No products available</div>; // Fallback message if data is unavailable
  }

  
  return (
    <div className="cards-container">
      {data.products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <div className="product-top">
              <img
                className="product-img"
                src={product.image}
                alt={product.name}
              />
              <h3 className="product-name">{product.name}</h3>
            </div>
            <div className="product-bottom">
              <P className="product-description">{product.description}</P>
              <div className="product-enquire-button">
                <a href={`https://wa.me/254123456789?text=Hey%20there%2C%20%0AI'm%20texting%20to%20know%20more%20about%20the%20${product.name}%20posted%20on%20your%20site.%20feel%20free%20to%20contact%20me%20here%2C%20thank%20you%20for%20your%20time%20%F0%9F%98%81`} target='_blank' className="product-button"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "#2ba64aff",}} /> Enquire</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
