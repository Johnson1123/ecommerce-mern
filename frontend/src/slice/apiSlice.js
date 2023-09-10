import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8050/",
  prepareHeaders: (headers, { getState, endpoint }) => {
    let { token } = getState();
    token = token.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
  credentials: "include",
});
