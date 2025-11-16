import React from "react";
import LandingPage from "./pages/TSX/LandingPage";
import { Route, Routes, useLocation } from "react-router";
import ContactPage from "./pages/TSX/ContactPage";
import LoginPage from "./pages/TSX/LoginPage";
import RegisterPage from "./pages/TSX/RegisterPage";
import ForgotPasswordPage from "./pages/TSX/ForgotPasswordPage";
import ProductPage from "./pages/TSX/ProductPage";
import { AnimatePresence } from "framer-motion";
import ClickEffect from "./components/ClickEffect/ClickEffect";
import DataFetcher from "./components/CallApi/CallApi";


function App() {
  const location = useLocation();
  return (
    <>
      <ClickEffect />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
          <Route
            path="/ForgotPassword"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/Product" element={<ProductPage />}></Route>
          <Route path="/api" element={<DataFetcher />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
