
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './component/login-form/Login'
import Regitration from './component/regestraion-form/Regitration'
import ProtectedRoute from './Services/ProtectedRoute';
import Order from './component/sidebarPages/Order';
import Home from './pages/home';
import Revenue from './component/sidebarPages/Revenue';
import HotDeals from './component/sidebarPages/HotDeals';
import Product from './component/sidebarPages/Product';
import Wishlist from './component/sidebarPages/Wishlist';
import Dashboard from './component/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
  path: '/',
  element: <Login/>
  },
  {
    path: '/registration',
    element: <Regitration/>
  },
  {
    path : '/protectedRoute',
    element: <ProtectedRoute/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
   path: '/order',
   element: <Order/>
  },
  {
    path: '/revenue',
    element: <Revenue/>
  },
  {
    path: '/hotDeals',
    element: <HotDeals/>
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/wishlist',
    element: <Wishlist/>
  }
]);

function App() {
  
  return (
    <>
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App;
