import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Book {
  title: string;
  author: string;
  img: string;
  genre: string;
  publication_date: string;
  reviews: string[];
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const addbookSlice = createSlice({
  name: "addbook",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = addbookSlice.actions;
export default addbookSlice.reducer;
