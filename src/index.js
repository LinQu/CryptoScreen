import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import CryptoDetails from './components/CryptoDetails';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/crypto" component={Crypto} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/crypto/:coinId" component={CryptoDetails} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
