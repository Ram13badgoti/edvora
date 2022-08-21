import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter,Routes} from "react-router-dom"

import "./login.css"
import "./App.css"
import Login from "./Login"

import Order from './Order';
import {Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
    <BrowserRouter>

<Routes>
<Route path ="/Order" element={<Order/>}/>
<Route path ="/" element={<Login/>}></Route>
</Routes>

  </BrowserRouter>
 
);


