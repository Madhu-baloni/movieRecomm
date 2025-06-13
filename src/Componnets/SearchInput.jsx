import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
function SearchInput() {
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (searchMovie.trim()) {
      navigate("/resultpage", { state: { searchMovie } });
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
        />
      </Box>
    </>
  );
}

export default SearchInput;
