import { apiSlice } from "../apiSlice.js";
const USERS_URL = "/profile";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customerProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    driverProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/activation`,
        method: "POST",
        body: data,
      }),
    }),
    putProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
  }),
});

export const {
  useCustomerProfileMutation,
  useDriverProfileMutation,
  usePutProfileMutation,
} = profileApiSlice;
