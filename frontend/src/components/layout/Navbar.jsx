import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

function Navbar({ active }) {
  return (
    <div
      className={`flex flex-col 800px:flex-row 800px:items-center 800px:justify-center `}
    >
      {navItems &&
        navItems.map((item, index) => {
          return (
            <div className="flex mt-3 py-1 800px:py-0 800px:mt-0" key={index}>
              <Link
                to={item.url}
                className={`${
                  active === index + 1
                    ? "text-[#17dd1f]"
                    : "text-gray-500 text-left 800px:text-[#fff]"
                } font-bold px-4 mx-2 cursor-pointer`}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Navbar;
