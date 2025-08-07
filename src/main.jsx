import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client"
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
     <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>
    
)
