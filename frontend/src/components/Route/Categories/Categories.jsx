import React from "react";
import styles from "../../../styles/styles";
import { brandingData, categoriesData } from "../../../static/data";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="flex justify-between rounded-md shadow-sm bg-white p-5 my-12">
          {brandingData &&
            brandingData.map((brand, index) => {
              return (
                <div className="flex items-start " key={index}>
                  {brand.icon}
                  <div className="px-3">
                    <h3 className="text-sm font-bold md:text-base">
                      {brand.title}
                    </h3>
                    <p className="text-[20px] md:text-sm">
                      {brand.Description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={`${styles.section} bg-white p-5`}>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap[20px] xl:grid-cols-[5] xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((product, index) => {
              const handleClick = (product) => {
                navigate(`/products?category=${product.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={product.id}
                  onClick={() => handleClick(product)}
                >
                  <h5 className="text-md leadin-[1.3]">{product.title}</h5>
                  <img
                    src={product.image_Url}
                    alt="product"
                    className="w-[120px] object-cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
