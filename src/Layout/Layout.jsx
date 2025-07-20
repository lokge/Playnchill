import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from 'react-router-dom'
import Notification from '../components/Notification';

const Layout = () => {
    return (
        <div className="outlet">
            <Notification/>

            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;