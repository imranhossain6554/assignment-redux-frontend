/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => {
      console.log(state);
      return action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
