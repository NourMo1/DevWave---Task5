import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Error from './components/Error/Error'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart/Cart'
import { Toaster } from 'react-hot-toast'
import WishlistContextProvider from './context/WishlistContext'
import AuthContextProvider from './context/AuthContext'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        {path: "/", element: <Home />},
        {path: "/home", element: <Home />},
        {path: "/menu", element: <Menu />},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
        {path: "/cart", element: <Cart />},
        {path: "/login", element: <Login />},
        {path: "/signup", element: <SignUp />},
        {path: "*", element: <Error />},
      ],
    }
  ])
  
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </WishlistContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
 
}

export default App;