/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react';
import './productStyles.css';
import { P } from '../StyledComponents/StyledElements';

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
                <a href={`https://wa.me/254712519486?text=Hey%20there%2C%20I'd%20like%20to%20ask%20more%20about%20${product.name}%20as%20advertised%20on%20your%20site.`} target='_blank' className="product-button">Enquire</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
