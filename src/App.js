import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import React from 'react';
import CheckoutAd from './component/CheckoutAd';
import ShoppingBasket from './component/ShoppingBasket';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes >
      <Route exact path='/' element={
        <React.Fragment>
          <Banner />
           <ProductList />
        </React.Fragment>
      }/>
      <Route exact path='/checkout' element={
        <React.Fragment>
          <CheckoutAd />
          <ShoppingBasket />
        </React.Fragment>
      }/>
      </Routes>
    </Router>
  )
}



export default App;
