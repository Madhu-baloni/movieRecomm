import { Box, Divider, Tab, Typography } from "@mui/material";
import Tabs from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { fetchMovies } from "../slice/MoviesSlice";
import { useDispatch } from "react-redux";
import MoviesCards from "./MoviesCards";
function TabPage() {
  const [value, setValue] = useState("all");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  localStorage.setItem("isMovie", value === "all" ? "movie" : value);

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/trending/${value}/day?language=en-US&api_key=` +
          import.meta.env.VITE_SECRET_API_KEY
      )
    );
  }, [dispatch, value]);
  return (
    <>
      <Box sx={{ width: "100%", mt: "4rem" }}>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
        >
          Trending
        </Typography>
        <Divider sx={{ background: "#FB9E3A" }} />

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="white"
            >
              <Tab label="All" value="all" sx={{ fontWeight: "bolder" }} />
              <Tab label="Movie" value="movie" sx={{ fontWeight: "bolder" }} />
              <Tab label="Series" value="tv" sx={{ fontWeight: "bolder" }} />
            </Tabs>
          </Box>
          <TabPanel value="all" tabIndex={0}>
            <MoviesCards />
          </TabPanel>
          <TabPanel value="movie" tabIndex={1}>
            <MoviesCards />
          </TabPanel>
          <TabPanel value="tv" tabIndex={2}>
            <MoviesCards />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default TabPage;
