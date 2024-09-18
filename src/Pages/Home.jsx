//dependancies
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Hero from '../Components/Home/Hero';

function Home () {
  return (
    <>
      <Hero />
      <section style={{ height: '100vh', padding: '0px 96px' }}>
        <main>
          <h1>Home</h1>
          Include the CTA
        </main>
      </section>

      <section>
        <featured>3 - 4 featured, best sellers,</featured>
        <Link to="/products">See more...</Link>
      </section>

      <section>
        <div>product rating and customer story.</div>
      </section>
    </>
  )
}

export default Home
