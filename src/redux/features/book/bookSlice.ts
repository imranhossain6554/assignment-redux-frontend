import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  genre: string | null;
  publicationYear: string | null;
}

const initialState: FilterState = {
  genre: null,
  publicationYear: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
    setPublicationYearFilter: (state, action: PayloadAction<string | null>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setGenreFilter, setPublicationYearFilter } = bookSlice.actions;

export default bookSlice.reducer;
