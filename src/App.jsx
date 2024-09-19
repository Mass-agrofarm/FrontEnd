// Dependancies
import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { OuterContainer } from './Components/StyledComponents/StyledComponents';

// components
import Navigation from './Components/Navigation';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contacts from './Pages/Contacts';
import Footer from './Components/Footer';






function App() {

  return (
    <>
      <Router>
        {/* Navigation */}
        <Navigation/>
        
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contacts' element={<Contacts />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </Router>
    </>
  )
}

export default App
