import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ScrollToTop from "./ScrollToTop";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import AuthForm from "./pages/Login/AuthForm";

import { useAuth } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const { currentUser } = useAuth();

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <div className="full-app">
        <ScrollToTop />
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm />} />
          <Route
            path="*"
            element={<Navigate to={currentUser ? "/home" : "/login"} />}
          />
          <Route
            path="/dashboard"
            element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
