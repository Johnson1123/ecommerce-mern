import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import MenuCart from "../../components/layout/MenuCart";
import MenuWishlist from "../../components/layout/MenuWishlist.jsx";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { backend_url } from "../../server";

function Header({ activeHeader }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState();
  const [openMobile, setOpenMobile] = useState();
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const { products } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishList);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filterProduct = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
    setSearchData(filterProduct.slice(0, 5));
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div className="">
            <Link to="/">
              <img
                src="https://johnsononifade.netlify.app/static/media/favicon.cafee00063933ef2ccb5.png"
                alt=""
                className="w-[50px]"
              />
            </Link>
          </div>
          {/* navbar input section */}
          <div className="relative w-[50%]">
            <input
              type="text"
              placeholder="Search product...."
              className="border-[2px] rounded-md border-green-900 w-full h-[40px] px-2 "
              onChange={handleSearchChange}
            />
            <AiOutlineSearch
              className="absolute right-2 top-1.5 text-gray-300"
              size={30}
            />
            {searchData && searchTerm.length !== 0 ? (
              <div className="absolute min-[30%] p-4 shadow-sm-2 bg-slate-50 z-[9]">
                {searchData &&
                  searchData.map((product, index) => {
                    const initialName = product.name;
                    const productName = initialName.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${productName}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={`${backend_url}${product?.images[0]}`}
                            alt="product"
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{product.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className="py-2 px-4 bg-green-900 rounded-md cursor-pointer">
            <Link to="/shop-create">
              <span className="flex items-center text-white">
                Become Seller <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed left-0 top-0 z-[10]" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-green-900 h-[70px] font-sans`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          <div className="">
            <div
              className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
              onClick={() => setDropDown(!dropDown)}
            >
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full bg-white flex justify-between items-center pl-10 text-lg font-bold select-none rounded-t-md">
                All categories
              </button>
              <IoIosArrowDown
                size={20}
                className="right-2 top-4 absolute cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          <div className={styles.normalFlex}>
            <Navbar active={activeHeader} />
          </div>
          <div className={`${styles.normalFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenWishlist(!openWishlist)}
            >
              <AiOutlineHeart size={30} className="text-gray-300" />
              <span
                className="absolute -right-2 top-0 rounded-full bg-[#3bc177] w-4 h-4 flex items-center justify-center p-[2px]
              text-[12px] font-mono text-white"
              >
                {wishList.length}
              </span>
            </div>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenCart(!openCart)}
            >
              <AiOutlineShoppingCart size={30} className="text-gray-300" />
              <span
                className="absolute -right-2 top-0 rounded-full bg-[#3bc177] w-4 h-4 flex items-center justify-center p-[2px]
              text-[12px] font-mono text-white"
              >
                {cart.length}
              </span>
            </div>
            <div className="relative cursor-pointer mr-[15px]">
              <Link to={`${!userInfo ? "/login" : "/profile"}`}>
                {userInfo?.avatar ? (
                  <img
                    src={`http://localhost:8050/${userInfo?.avatar}`}
                    className="h-[35px] w-[35px] rounded-full"
                  />
                ) : (
                  <CgProfile size={30} className="text-gray-300" />
                )}
              </Link>
            </div>
          </div>
          {openCart && <MenuCart setOpenCart={setOpenCart} />}
          {openWishlist && <MenuWishlist setOpenWishlist={setOpenWishlist} />}
        </div>
      </div>

      {/* Mobile header */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-sm bg-white 800px:hidden">
        <div className="w-full flex items-center justify-between px-4 py-3">
          <div className="">
            <BiMenuAltLeft size={40} onClick={() => setOpenMobile(true)} />
          </div>
          <div className="">
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="relative">
            <div className="h-full w-full">
              <AiOutlineShoppingCart size={40} />
            </div>
            <span className="h-[20px] text-sm text-white w-[20px] absolute top-0 right-0 bg-green-400 rounded-full p-1 flex justify-center items-center">
              0
            </span>
          </div>
        </div>
        {openMobile && (
          <div className="bg-[#0000005f] z-20 w-full fixed h-full left-0 top-0">
            <div className="w-[60%] bg-white h-screen z-10 top-0 left-0 fixed py-4">
              <div className="w-full flex justify-between items-center mt-4 px-5">
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(!openWishlist)}
                >
                  <AiOutlineHeart size={30} className="text-gray-300" />
                  <span
                    className="absolute -right-2 top-0 rounded-full bg-[#3bc177] w-4 h-4 flex items-center justify-center p-[2px]
                      text-[12px] font-mono text-white"
                  >
                    3
                  </span>
                </div>
                <div
                  className=" cursor-pointer mr-[15px]"
                  onClick={() => setOpenMobile(!openMobile)}
                >
                  <RxCross1 size={30} className="text-gray-300" />
                </div>
              </div>
              <div className="w-full px-4 relative mt-5">
                <input
                  type="text"
                  placeholder="Search product...."
                  className="border-[2px] rounded-md border-[#3957db] w-full h-[40px] px-2 "
                  onChange={handleSearchChange}
                />
                {searchData && searchTerm.length !== 0 ? (
                  <div className="absolute min-[30%] p-4 shadow-sm-2 bg-slate-50 z-[9]">
                    {searchData &&
                      searchData.map((product, index) => {
                        const initialName = product.name;
                        const productName = initialName.replace(/\s+/g, "-");
                        return (
                          <Link to={`/product/${productName}`}>
                            <div className="w-full flex items-start py-3">
                              <img
                                src={product.image_Url[0].url}
                                alt="product"
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{product.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>
              <div className={`${styles.normalFlex} mt-5 800px:mt-0`}>
                <Navbar active={activeHeader} />
              </div>
              <div className="py-2 px-4 bg-black rounded-md cursor-pointer w-[200px] mt-10 ml-5">
                <Link to="/shop-create">
                  <span className="flex items-center text-white">
                    Become Seller <IoIosArrowForward />
                  </span>
                </Link>
              </div>
              <div className="flex w-full justify-center mt-10">
                {userInfo ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${userInfo?.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
