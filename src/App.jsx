import React from 'react';
import { heroapi, popularsales, toprateslaes,
   highlight, sneaker, story, footerAPI} from './data/data.js';
import Hero from './Components/Hero.jsx';
import Sales from './Components/Sales.jsx';
import FlexContent from './Components/FlexContent.jsx';
import Stories from './Components/Stories.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Cart from './Components/Cart.jsx';

const App = () => {
  return (
   <>
       <Navbar/>  
       <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight}/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
   </>
  )
}

export default App;