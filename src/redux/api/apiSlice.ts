/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooks } from "../../types/globalTypes";

export const api = createApi({
  reducerPath: "books",
  tagTypes: ["books", "reviews"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-system-backend-production.up.railway.app",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["books"],
    }),
    getAllBooks: builder.query({
      query: () => `/books`,
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    singleAllBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    addBook: builder.mutation<IBooks, Partial<IBooks>>({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBook: builder.mutation<void, number>({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  usePostReviewMutation,
  useGetReviewsQuery,
  useGetAllBooksQuery,
  useSingleAllBookQuery,
} = api;

// https://book-catalog-server-emonhowlader1997-gmailcom.vercel.app/

// last url: https://book-catalog-backend-server.vercel.app/
