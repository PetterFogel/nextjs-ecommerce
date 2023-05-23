import { IProduct } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<IProduct[], void>({
      query: () => "products"
    })
  })
});

export const { useFetchProductsQuery } = productsApi;
