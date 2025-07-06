import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Header from '../components/Header';
import Cart from './Cart';
import WishList from './WishList';

const Layout = () => {

    return (
        <div>
            <Header/>
            <div className='mt-5 pt-5'>
                <Routes >
                    <Route path='/' element={<Home/>} />
                    <Route path='/product/:prodId' element={<Product/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/wishlist' element={<WishList/>} />
                </Routes>
            </div>

        </div>
    );
}

export default Layout;
