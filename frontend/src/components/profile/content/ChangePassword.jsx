import React, { useState } from "react";
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { useChangePasswordMutation } from "../../../slice/userApiSlice.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { isLoading, error }] = useChangePasswordMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    try {
      await changePassword(body);
      toast.success("password updated successfully");
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <div className="w-full pl-5">
      <p className="text-[25px] text-center ">Change Password</p>
      <div className="w-[95%] 800px:w-[40%] mx-auto mt-10 flex justify-between items-center bg-white py-4 px-4 rounded-sm 800px:pr-10">
        <form action="" className=" w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col  gap-3 mt-3">
            <label htmlFor="">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md w-[100%]"
            />
          </div>
          <div className="flex flex-col  gap-3 mt-3">
            <label htmlFor="">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col  gap-3 mt-3">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md w-full"
            />
          </div>
          <div className=" mt-10 hover:border-[#787878] border-[1px] border-[#d9d9d9] cursor-pointer rounded-md">
            <input
              type="submit"
              value="Update"
              className="py-2 px-3 rounded-md w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
