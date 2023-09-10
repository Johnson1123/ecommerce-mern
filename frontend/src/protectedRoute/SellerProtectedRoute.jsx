import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/layout/Loader.jsx";

function SellerProtectedRoute({ children }) {
  const { seller, isLoading } = useSelector((state) => state?.seller);
  const navigate = useNavigate();
  if (isLoading === true) {
    return <Loader />;
  } else {
    if (!seller) {
      navigate("/shop-login");
    }
    return children;
  }
}

export default SellerProtectedRoute;
