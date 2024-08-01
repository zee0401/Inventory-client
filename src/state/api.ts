import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getEndPoints } from "recharts/types/cartesian/ReferenceLine";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({}),
});

export const {} = api;
