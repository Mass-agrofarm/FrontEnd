// Dependancies
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { OuterContainer } from '@components/StyledComponents/StyledComponents';

// components
import Navigation from '@components/Navigation/Navigation';
// import { Error }

// Pages
import Home from '@pages/Home';
import About from '@pages/About';
import Products from '@pages/Products';
import Contacts from '@pages/Contacts';
import Footer from '@components/Footer/Footer';
import ErrorPage from '@components/ErrorPages/ErrorPage';
import ScrollToTop from '@components/ScrollToTop';






function App() {

  return (
    <>
      <Router>
        {/* Navigation */}
        <Navigation/>
        <ScrollToTop />
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </Router>
    </>
  )
}

export default App
