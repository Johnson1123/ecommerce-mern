import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useActivateMutation } from "../slice/userApiSlice";

function Activation() {
  const { activation_token } = useParams();
  const { error, setError } = useState(false);
  const dispatch = useDispatch();
  const [activate] = useActivateMutation();
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = activate(activation_token).unwrap();
          console.log(res?.data?.message);
        } catch (error) {
          console.log(error?.response?.data?.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {true ? (
        <p>token expired</p>
      ) : (
        <p>your account is created successfully</p>
      )}
    </div>
  );
}

export default Activation;
