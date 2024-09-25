// eslint-disable-next-line no-unused-vars
import React , {useState, Suspense} from 'react';
import './productStyles.css';


const ProductCards = () => {
  return (
    <div className="cards-container">
          <div className="product-card">
            <div className="product-top">
              <img className='product-img' src='https://fakeimg.pl/353x252/c5c5c5/959595?text=Mass+AgroFarm+Product&font=museo&font_size=24&retina=1' alt='Mass Agro farm product'/>
              <h3 className='product-name'>product name.</h3>
            </div>
            <div className='product-bottom'>
              <p className='product-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit illum numquam. Eum quaerat sit laboriosam inventore laborum distinctio beatae nesciunt quibusdam</p>
              <div className="product-enquire-button">
                <button className="product-button">Enquire</button>
              </div>
            </div>
          </div>
    </div>
  )
};

export default ProductCards
