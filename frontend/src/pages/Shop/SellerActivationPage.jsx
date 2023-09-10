import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useActivateSellerMutation } from "../../slice/userApiSlice";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [activateSeller, { isLoading }] = useActivateSellerMutation();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          const res = await activateSeller(activation_token);
        } catch (err) {
          setError(true);
        }
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
