import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://techvonix.onrender.com/api/v1/",
});

export const profileSlice = createApi({
  baseQuery,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({}),
});
