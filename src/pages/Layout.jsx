import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Header from '../components/Header';
import Cart from './Cart';
import WishList from './WishList';
import Profile from './Profile';
import Protector from '../components/Protector';
import Popup from '../components/Popup';

const Layout = () => {

    return (
        <div>
            <Header/>
             <Popup />
            <div className='mt-5 pt-5'>
                <Routes >
                    <Route path='/' element={<Home/>} />
                    <Route path='/product/:prodId' element={<Product/>} />
                    <Route path='/cart' element={<Protector> <Cart/> </Protector>} />
                    <Route path='/wishlist' element={<Protector> <WishList/> </Protector>} />
                    <Route path='/profile' element={<Protector> <Profile/> </Protector>} />
                </Routes>
            </div>

        </div>
    );
}

export default Layout;
