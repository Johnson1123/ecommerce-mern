import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80)",
        backgroundPosition: "top",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className="text-[35px] font-extrabold 800px:text-[30px] text-[#3d3a3a] capitalize">
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[18px] font-[Poppins]  font-[500] text-black w-[70%]">
          "Welcome to the J&R! 🛍️ Explore our curated selection of products and
          discover your next shopping adventure. From fashion to electronics,
          we've got it all. Start browsing and make your shopping experience
          truly heroic!"
        </p>
        <div className="cursor-pointer  flex items-center justify-center mt-5 800px:w-[20%]">
          <Link
            to="/products"
            className="text-white font-[400] text-md py-3 px-4 hover:text-gray-500  bg-black rounded-lg inline-block w-[100%] text-center"
          >
            Show Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
