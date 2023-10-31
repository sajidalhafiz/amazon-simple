import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductLoader from './loaders/cartProductLoader.js';
import ProceedCheckout from './components/ProceedCheckout/ProceedCheckout.jsx';
import SignUp from './components/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <Shop/>
      },
      {
        path: 'orders',
        element: <Orders/>,
        loader: cartProductLoader
      },
      {
        path: 'proceed',
        element: <ProceedCheckout/>
      },
      {
        path: 'inventory',
        element: <Inventory/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: '*',
        element: <h2>404</h2>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
