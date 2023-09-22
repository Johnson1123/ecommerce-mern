import apiSlice from "./sliceApi.js";
const USERS_URL = "api/users";
const SHOP_URL = "/api/shop";
const PRODUCT_URL = "/api/product";
const Event_URL = "/api/event";
const Coupon_URL = "/api/coupon";
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    activate: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/activation`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/user`,
        method: "PUT",
        body: data,
      }),
    }),
    updateAddress: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/address`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAddress: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/address/${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
    updateAvatar: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/avatar`,
        method: "PUT",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/password`,
        method: "PUT",
        body: data,
      }),
    }),

    activateSeller: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/activation`,
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),

    // Seller slices
    createShop: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/create-shop`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    loginSeller: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/login-seller`,
        method: "POST",
        body: data,
      }),
    }),
    getSeller: builder.mutation({
      query: () => ({
        url: `${SHOP_URL}/get-seller`,
        method: "GET",
      }),
    }),
    profileSeller: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/profile-seller/${data}`,
        method: "GET",
      }),
    }),

    // Product slice features
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/create-product`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),

    getProducts: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/get-all-product`,
        method: "GET",
      }),
    }),
    getAllProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/get-all-shop-product/${data}`,
        method: "GET",
      }),
    }),

    deleteShopProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/delete-shop-product/${data}`,
        method: "GET",
      }),
    }),

    // Event slice features
    createEvent: builder.mutation({
      query: (data) => ({
        url: `${Event_URL}/create-event`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    getAllEvent: builder.mutation({
      query: (data) => ({
        url: `${Event_URL}/get-all-shop-event/${data}`,
        method: "GET",
      }),
    }),
    deleteShopEvent: builder.mutation({
      query: (data) => ({
        url: `${Event_URL}/delete-shop-event/${data}`,
        method: "GET",
      }),
    }),

    // coupon slice
    createCoupon: builder.mutation({
      query: (data) => ({
        url: `${Coupon_URL}/create-coupon`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    getCoupon: builder.mutation({
      query: (data) => ({
        url: `${Coupon_URL}/get-coupon/${data}`,
        method: "GET",
      }),
    }),
    deleteCoupon: builder.mutation({
      query: (data) => ({
        url: `${Coupon_URL}/delete-coupon/${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUserMutation,
  useActivateMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useUpdateAvatarsMutation,
  useChangePasswordMutation,

  useCreateShopMutation,
  useActivateSellerMutation,
  useLoginSellerMutation,
  useGetSellerMutation,
  useProfileSellerMutation,
  useCreateProductMutation,
  useGetAllProductMutation,
  useGetProductsMutation,
  useDeleteShopProductMutation,
  useCreateEventMutation,
  useGetAllEventMutation,
  useDeleteShopEventMutation,
  useCreateCouponMutation,
  useGetCouponMutation,
  useDeleteCouponMutation,
} = userApiSlice;
