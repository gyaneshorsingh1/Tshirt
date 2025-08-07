// src/components/Dashboard.jsx
import React, { useContext } from "react";

import { motion } from "framer-motion";
import "./Dashboard.css"; // for styling
import { FaUserCircle } from "react-icons/fa";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const Dashboard = () => {
    const navigate = useNavigate()
    const currentUser = useAuth();
    const username = currentUser.currentUser.displayName;

    
    
    
  const dummyOrders = [
    { id: 1, product: "iPhone 15", status: "Shipped" },
    { id: 2, product: "MacBook Air", status: "Delivered" },
    { id: 3, product: "AirPods Pro", status: "Processing" },
  ];

    const handleLogout = async () => {
      try {
        await signOut(auth); // ✅ correct usage
  
        toast.success("Logged out successfully!");
        navigate("/login");
      } catch (error) {
        toast.error("Logout failed");
      }
    };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <div className="dashboard-header">
        <FaUserCircle size={80} color="#555" />
        <h2>Welcome, {username}</h2>
        <p>{currentUser.currentUser.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-orders">
        <h3>Your Orders</h3>
        <ul>
          {dummyOrders.map((order) => (
            <li key={order.id}>
              <strong>{order.product}</strong> - {order.status}
            </li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
};

export default Dashboard;
