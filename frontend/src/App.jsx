import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  Navigate,
  Link,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  LoginPage,
  SignupPage,
  Homepage,
  ProductPage,
  EventPage,
  BestSelling,
  FaqPage,
  Activation,
  ProductDetails,
  ProfilePage,
  CheckoutPage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  SellerDashboard,
  ShopHomePage,
  CreatePoductPage,
  CreateEventPage,
  AllShopProduct,
  AllShopEventPage,
  AllShopCouponsCodePage,
  PaymentPage,
} from "./routes/routes.js";

import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useEffect } from "react";
import {
  useGetProductsMutation,
  useGetSellerMutation,
  useGetUserMutation,
} from "./slice/userApiSlice";
import { setSeller } from "./slice/sellerState";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import SellerProtectedRoute from "./protectedRoute/SellerProtectedRoute";
import { setProduct } from "./slice/productState";
import Loader from "./components/Layout/Loader";
import { setCredentials } from "./slice/authSlice";

function App() {
  const dispatch = useDispatch();

  const [loadSeller, { error }] = useGetSellerMutation();
  const [getProducts, { isLoading }] = useGetProductsMutation();
  const [getUser] = useGetUserMutation();

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/product/:name",
          element: <ProductDetails />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/payment",
          element: (
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          ),
        },

        {
          path: "/shop-create",
          element: <ShopCreatePage />,
        },
        {
          path: "/shop-login",
          element: <ShopLoginPage />,
        },
        {
          path: "/seller/activation/:activation_token",
          element: <SellerActivationPage />,
        },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <SellerProtectedRoute>
          <SellerDashboard />
        </SellerProtectedRoute>
      ),
    },
    // shop
    {
      path: "/shop/:id",
      element: (
        <ProtectedRoute>
          <ShopHomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboard-products",
      element: (
        <SellerProtectedRoute>
          <AllShopProduct />
        </SellerProtectedRoute>
      ),
    },
    {
      path: "/dashboard-create-product",
      element: (
        <SellerProtectedRoute>
          <CreatePoductPage />
        </SellerProtectedRoute>
      ),
    },
    {
      path: "/dashboard-create-event",
      element: (
        <SellerProtectedRoute>
          <CreateEventPage />
        </SellerProtectedRoute>
      ),
    },
    {
      path: "/dashboard-events",
      element: (
        <SellerProtectedRoute>
          <AllShopEventPage />
        </SellerProtectedRoute>
      ),
    },
    {
      path: "/dashboard-coupouns",
      element: (
        <SellerProtectedRoute>
          <AllShopCouponsCodePage />
        </SellerProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignupPage />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/events",
      element: <EventPage />,
    },
    {
      path: "/best-selling",
      element: <BestSelling />,
    },
    {
      path: "/faq",
      element: <FaqPage />,
    },
    {
      path: "/activation/:activation_token",
      element: <Activation />,
    },
  ]);

  useEffect(() => {
    (async () => {
      const res = await loadSeller().unwrap();
      await dispatch(setSeller({ ...res.seller }));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await getUser().unwrap();
      await dispatch(setCredentials({ ...res.user }));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await getProducts().unwrap();
      await dispatch(setProduct(res.products));
    })();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
export default App;
