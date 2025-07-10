import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slice/MoviesSlice";
import creditsReducer from "../slice/MovieCreditsSlice";
import crewsReducer from "../slice/MovieCrewsSlice";
import reviewSlice from "../slice/ReviewSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    casts: creditsReducer,
    crews: crewsReducer,
    reviews: reviewSlice,
  },
});
