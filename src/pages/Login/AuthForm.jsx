// src/components/AuthForm.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { auth } from "../../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile // ✅ Add this
} from "firebase/auth";

import "./Authform.css";
import { useNavigate } from "react-router";
 import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";


export default function AuthForm() {

  const Navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // only for signup
  const [message, setMessage] = useState("");

  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      toast("✅ Login successful!");
      Navigate("/home");
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ✅ Set displayName to username
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      toast("✅ Signup successful!");
      Navigate("/home");
    }
  } catch (error) {
    toast(`❌ ${error.message}`);
  }
};

 

const location = useLocation();
useEffect(() => {
  setIsLogin(location.pathname === "/login");
}, [location.pathname]);


  return (
    <div className="auth-container">
      <motion.div
        key={isLogin ? "login" : "signup"}
        className="form-box"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={formVariants}
        transition={{ duration: 0.5 }}
      >
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p onClick={toggleForm} className="toggle">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>

        {message && <p className="message">{message}</p>}
      </motion.div>
    </div>
  );
}
