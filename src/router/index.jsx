import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Spa from '@/pages/Spa';
import Cart from '@/pages/Cart';
import About from '@/pages/About';

const AppRouter = () => {
    const location = useLocation();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/spa" element={<Spa />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
        </Layout>
    );
};

export default AppRouter;