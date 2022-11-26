import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componets/Footer';
import Header from '../componets/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;