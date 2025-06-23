import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchResults } from "../slice/MoviesSlice";
function SearchInput() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const input = localStorage.getItem("isMovie");
  const navigate = useNavigate();
  const handleClick = () => {
    if (searchMovie.trim()) {
      navigate("/resultpage");
      if (searchMovie) {
        const apiUrl = `https://api.themoviedb.org/3/search/${input}?query=${searchMovie}&include_adult=false&language=en-US&page=1&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`;
        dispatch(fetchResults(apiUrl));
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
      setSearchMovie("");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 1,
          width: { xs: "auto", sm: "250px", md: "300px" },
          p: "2px 8px",
          marginLeft: { xs: "none", md: "4rem" },
        }}
      >
        <SearchIcon
          sx={{ color: "black", background: "white" }}
          onClick={handleClick}
        />
        <InputBase
          sx={{
            ml: 1,
            background: "white",
            flex: 1,
            fontSize: "14px",
          }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </Box>
    </>
  );
}

export default SearchInput;
