import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";;

export const fetchReviews = createAsyncThunk(
  "movies/fetchReviews",
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.results;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default reviewSlice.reducer;
