import React, { useEffect, useState } from "react";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const BestSellingPage = () => {
  const [data, setData] = useState([]);
  //  const { products } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    const sortedData = [...products]?.sort(
      (a, b) => b.total_sell - a.total_sell
    );
    setData(sortedData);
  }, []);

  return (
    <>
      <div>
        <Header activeHeading={2} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BestSellingPage;
