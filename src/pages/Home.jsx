import React from 'react';
import Product from './Product';
import Products from '../components/Products';
import Page from '../components/Page';
import Filter from '../components/Filter';
import CartPop from '../components/CartPop';



const Home = () => {

    return (
        <div>
          <Filter />
          <Products />
          <Page/>
          <CartPop/>
        </div>
    );
}

export default Home;
