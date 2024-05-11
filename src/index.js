import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import CryptoDetails from './components/CryptoDetails';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Crypto />} />
        <Route path="trending" element={<Trending />} />
        <Route path="saved" element={<Saved />} />
        <Route path=":coinId" element={<CryptoDetails />} />
      </Route>
    </Routes>
  </HashRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
