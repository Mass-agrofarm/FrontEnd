import React from 'react'
import './productStyles.css'


const ProductCards = () => {
  return (
    <div className="cards-container">
      {
        <div className="card" style={{width: '355px', backgroundColor: 'whitesmoke', color: 'black', padding: '5px', borderRadius: '15px'}}>
          <div className="top">
            <img className='img' src='https://fakeimg.pl/353x252/c5c5c5/959595?text=Mass+Agro+Farm+Product&font=museo&font_size=24&retina=1' alt='Mass Agrofarm product'/>
            <h3>Product Name.</h3>
          </div>
          <div className='bottom' style={{ padding:'0px 0px 15px 15px' }}>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit illum numquam. Eum quaerat sit laboriosam inventore laborum distinctio beatae nesciunt quibusdam</p>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductCards
