import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((category, index) => {
          return (
            <div
              key={index}
              className={`${styles.normalFlex}`}
              onClick={() => handleClick(category)}
            >
              <img
                src={category.image_Url}
                alt="category"
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "contain",
                  marginLeft: "10px",
                  userSelect: "none",
                }}
              />
              <h3 className="text-md select-none m-3">{category.title}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default DropDown;
