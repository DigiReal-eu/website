import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home';
import Partners from './pages/partners/partners';
import ScrollTop from './components/shared/scroll-top/scroll-top';

function App() {
    return (
        <div className="app">
            <ScrollTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
