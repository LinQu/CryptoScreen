
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import CryptoDetails from './components/CryptoDetails';

const cryptoDetailsRoute = {
  path: ':coinId',
  element: <CryptoDetails />,
};

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Crypto />,
        children: [cryptoDetailsRoute],
      },
      {
        path: '/trending',
        element: <Trending />,
        children: [cryptoDetailsRoute],
      },
      {
        path: '/saved',
        element: <Saved />,
        children: [cryptoDetailsRoute],
      },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>{routes}</Routes>
    </HashRouter>
  </React.StrictMode>
);