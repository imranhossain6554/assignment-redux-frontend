import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalTypes";

interface IWishlist {
  books: IBooks[];
}

const initialState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBooks>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing) {
        console.log("Already exist");
      } else {
        state.books.push(action.payload);
      }
    },
    finishWishlist: (state, action: PayloadAction<IBooks>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, finishWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
