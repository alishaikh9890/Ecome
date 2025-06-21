import React from 'react';
import Product from './Product';
import Products from '../components/Products';
import Page from '../components/Page';
import Filter from '../components/Filter';

const Home = () => {
    return (
        <div className='pt-4'>
            <Filter />
          <Products />
          <Page/>
        </div>
    );
}

export default Home;
