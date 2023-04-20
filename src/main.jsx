import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';
import ProceedCheckOut from './components/ProceedCheckout/ProceedCheckOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order review',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: '/proceedCheckout',
        element: <PrivateRoute><ProceedCheckOut></ProceedCheckOut></PrivateRoute>
      },
      {
        path: '/manage inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
