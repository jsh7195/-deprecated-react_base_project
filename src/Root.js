import React from 'react';
import lodash from 'lodash';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Provider } from 'react-redux';

import Login from './components/template/Login';
import {
  ProductListPage,
  ProductRegPage,
  ProductModPage,
} from './components/template/Product';

import '../public/css/Dosirak.css';
import '../public/css/shop_common.css';
import '../public/css/prd.css';
import '../public/css/login.css';

const Root = () => {
  window._ = lodash;

  return (
    <div className="wrap">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductRegPage} />
          <Route exact path="/prod" component={ProductListPage} />
          <Route exact path="/prod/reg" component={ProductRegPage} />
          <Route exact path="/prod/mod" component={ProductModPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Root;
