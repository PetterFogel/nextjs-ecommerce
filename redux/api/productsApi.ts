import { HttpMethod } from "@/common/constants/enums";
import { IProduct } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<IProduct[], void>({
      query: () => "products"
    }),
    fetchProductById: builder.query<
      IProduct,
      { productId: string | undefined }
    >({
      query: ({ productId }) => `products/${productId}`
    }),
    addProduct: builder.mutation<IProduct, Partial<IProduct>>({
      query: (body) => ({
        url: "products",
        method: HttpMethod.POST,
        body
      })
    }),
    updateProduct: builder.mutation<
      void,
      Pick<IProduct, "_id"> & Partial<IProduct>
    >({
      query: ({ _id, ...values }) => ({
        url: `products/${_id}`,
        method: HttpMethod.PUT,
        body: values
      })
    }),
    deleteProduct: builder.mutation<
      { id: string | undefined },
      string | undefined
    >({
      query(id) {
        return {
          url: `products/${id}`,
          method: HttpMethod.DELETE
        };
      }
    })
  })
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productsApi;
