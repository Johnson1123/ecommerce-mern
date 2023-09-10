import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import AllOrder from "./content/AllOrder.jsx";
import ChangePassword from "./content/ChangePassword.jsx";
import AddressContent from "./content/AddressContent.jsx";
import { useUpdateUserMutation } from "../../slice/userApiSlice.js";
import { toast } from "react-toastify";

function ProfileContent({ active }) {
  const { userInfo } = useSelector((state) => state.auth);
  const [name, setName] = useState(userInfo && userInfo?.name);
  const [email, setEmail] = useState(userInfo && userInfo?.email);
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState(
    userInfo && userInfo?.phoneNumber
  );
  const [avatar, setAvatar] = useState(userInfo && userInfo?.avatar);

  const [upadteUser, { isLoading, error }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        phoneNumber,
      };
      formData.append("phoneNumber");
      await upadteUser(body).unwrap();
      toast.success("User updated succesfully");
    } catch (error) {}
  };

  return (
    <div className="w-full">
      {active === 1 && (
        <>
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src={`http://localhost:8050/${avatar}`}
                alt=""
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-red-600"
              />
              <div className="h-[30px] w-[30px] bg-[#E3e9ee] cursor-pointer rounded-full flex justify-center items-center absolute right-[5px] bottom-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <div className="w-full px-5 mt-5 800px:mt-10">
            <form onSubmit={handleSubmit}>
              <div className="w-full pb-3 800px:flex my-4 ">
                <div className="800px:w-[50%] 800px:mr-4 mt-3 800px:mt-0">
                  <label htmlFor="" className="block pb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md h-[35px] px-2"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="800px:w-[50%] mt-3 800px:mt-0">
                  <label htmlFor="" className="block pb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${styles.input} px-2 h-[35px]`}
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full pb-3 800px:flex my-4">
                <div className="800px:w-[50%] 800px:mr-4">
                  <label htmlFor="" className="block pb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md h-[35px] px-2"
                    required
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="800px:w-[50%] mt-3 800px:mt-0">
                  <label htmlFor="" className="block pb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    className={`${styles.input} px-2 h-[35px]`}
                    required
                    name="password"
                    value={password}
                    autoComplete="false"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Update"
                required
                className={`w-full 800px:w-[250px]  h-[40px] border border-[#3a24db] text-center text-[#3a24db] cursor-pointer mt-8 rounded-sm`}
              />
            </form>
          </div>
        </>
      )}
      {active === 2 && <AllOrder />}
      {active === 6 && <ChangePassword />}
      {active === 7 && <AddressContent />}
    </div>
  );
}

export default ProfileContent;
