import React, { useState } from "react";
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { RxScissors } from "react-icons/rx";
import { Country, State, City } from "country-state-city";
import {
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} from "../../../slice/userApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function AddressContent() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");

  const [updateAddress] = useUpdateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
    {
      name: "Church",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      country: country,
      state: state,
      city: city,
      address1: address1,
      address2: address2,
      zipCode: zipCode,
      addressType: addressType,
    };
    try {
      await updateAddress(body);
      setOpen(false);
      toast.success("Address updated successfully");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteAddress(item);
      toast.error("Address deleted Successfully");
      window.location.reload(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full pl-5">
      <div className="flex items-center justify-between ">
        <h3 className="text-[25px]  font-[500]">My Address</h3>
        <button
          onClick={() => setOpen(true)}
          className="px-4 text-sm bg-black rounded-md cursor-pointer text-center h-[45px] flex items-center justify-center text-white text-[700]"
        >
          Add New
        </button>
      </div>

      {userInfo.addresses.length > 0 &&
        userInfo.addresses.map((item, index) => {
          return (
            <div
              className="flex justify-between items-center bg-white py-4 px-4 mt-4 rounded-sm 800px:pr-10"
              key={index}
            >
              <div className="flex items-center">
                <h6 className="text-md -font-bold ml-4">{item.addressType}</h6>
              </div>
              <div className="flex justify-center w-[35%]  truncate">
                <p className="text-md font-[400] text-center">
                  {item.address1}
                </p>
              </div>
              <div className="flex items-center ">
                <p className="text-md font-[400]">{item.address2}</p>
              </div>
              <div
                className="cursor-pointer hover:text-red-600"
                onClick={() => handleDelete(item._id)}
              >
                <AiOutlineDelete size={25} />
              </div>
            </div>
          );
        })}

      {open && (
        <div className="fixed top-0 left-0  w-full h-screen bg-[#0000002e] flex justify-center items-center z-50">
          <div className="w-[95%] 800px:w-[50%] rounded-md shadow-md h-[90%] bg-white relative top-0 left-0 overflow-y-scroll no-scrollbar">
            <div
              className="absolute top-5 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline size={35} className="font-bold" />
            </div>
            <div className="my-5 w-[80%] mx-auto ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    Country
                  </label>
                  <select
                    name="country"
                    id=""
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Select country</option>
                    {Country &&
                      Country.getAllCountries().map((item) => {
                        return (
                          <option value={item.isoCode} key={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    State
                  </label>
                  <select
                    name="state"
                    id=""
                    required
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Select state</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => {
                        return (
                          <option value={item.isoCode} key={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    City
                  </label>
                  <select
                    name="city"
                    id=""
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select city</option>
                    {Country &&
                      City.getCitiesOfState(country, state).map((item) => {
                        return (
                          <option value={item.name} key={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    Address 1
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    Address 2
                  </label>
                  <input
                    type="text"
                    name="address2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <label htmlFor="" className="font-bold">
                    Address Type
                  </label>
                  <select
                    name="addressType"
                    id=""
                    required
                    onChange={(e) => setAddressType(e.target.value)}
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md"
                  >
                    <option value="">select Address Type</option>
                    {addressTypeData.map((item) => {
                      return (
                        <option value={item.name} key={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex flex-col  gap-3 mt-3">
                  <input
                    type="submit"
                    className="border-[1px] border-[#d9d9d9] py-2 px-3 rounded-md cursor-pointer mt-5 hover:border-[#a9a9a9]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressContent;
