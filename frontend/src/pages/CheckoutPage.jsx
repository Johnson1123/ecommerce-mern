import React from "react";
import CheckoutSteps from "../components/Checkout/CheckoutSteps.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";

const CheckoutPage = () => {
  return (
    <div>
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
