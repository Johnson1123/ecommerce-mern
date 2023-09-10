import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../../components/Shop/ShopLogin.jsx";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { seller, isLoading } = useSelector((state) => state?.seller);

  console.log(seller);

  useEffect(() => {
    if (seller) {
      navigate(`/dashboard`);
    }
  }, [isLoading]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
