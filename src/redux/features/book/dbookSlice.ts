// bookSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  img: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const dBookSlice = createSlice({
  name: "dbook",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    deleteBookLocally: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { setBooks, deleteBookLocally } = dBookSlice.actions;

export default dBookSlice.reducer;
