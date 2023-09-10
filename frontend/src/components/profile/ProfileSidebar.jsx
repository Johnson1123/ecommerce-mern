import React from "react";
import { AiOutlineCreditCard, AiOutlineMessage } from "react-icons/ai";
import { BsReceipt } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdCloudOutline, IoMdLogOut } from "react-icons/io";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { useLogoutMutation } from "../../slice/userApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../slice/authSlice";
import { useDispatch } from "react-redux";

function ProfileSidebar({ active, setActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      await dispatch(logout());
      toast.success("You have successfully logout");
      window.location.reload(true);
    } catch (error) {
      toast.error("Logout not Work");
    }
  };
  return (
    <div className="w-full rounded-sm shadow-sm bg-white p-4 pb-8">
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(2)}
      >
        <CgShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(3)}
      >
        <BsReceipt size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(4)}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(5)}
      >
        <IoMdCloudOutline size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Track Order
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(6)}
      >
        <MdOutlinePassword size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Change Password
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Address
        </span>
      </div>
      <div
        className="flex items-center mb-8 cursor-pointer w-full"
        onClick={() => setActive(8) || logoutUser()}
      >
        <IoMdLogOut size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red]" : ""
          } hidden 800px:block`}
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default ProfileSidebar;
