import React, { useEffect } from "react";
import Header from "../components/layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturesProduct from "../components/Route/FeaturesProduct/FeaturesProduct.jsx";
import Events from "../components/Route/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored/Sponsored.jsx";
import Footer from "../components/layout/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Homepage() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.seller);
  const seller = userInfo?.user?.seller;
  useEffect(() => {
    if (seller) {
      navigate(`/shop/${seller._id}`);
    }
  });
  return (
    <div>
      <Header activeHeader={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturesProduct />
      <Sponsored />
      <Footer />
    </div>
  );
}

export default Homepage;
