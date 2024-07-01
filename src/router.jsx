import { createBrowserRouter } from 'react-router-dom'

import Home from './ui/Home';
import Menu from './features/menu/Menu';
import CreateUser from './features/user/CreateUser';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/menu',
      element: <Menu/>
    },
    {
      path: '/user',
      element: <CreateUser/>
    },
    {
      path: '/cart',
      element: <Cart/>
    },
    {
      path: '/order/new',
      element: <CreateOrder />
    },
    {
      path: '/order/:orderId',
      element: <Order/>
    },
  ]);