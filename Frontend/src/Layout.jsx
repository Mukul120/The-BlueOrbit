import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col h-screen relative">
            <Header />
            <main className="flex-grow pt-1">
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;
