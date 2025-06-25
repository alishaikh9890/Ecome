

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Header from '../components/Header';

const Layout = () => {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product/:prodId' element={<Product/>} />
            </Routes>

        </div>
    );
}

export default Layout;
