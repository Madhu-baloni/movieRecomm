import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import styled from "@emotion/styled";

function MoviesCards() {
  const StyledBtn = styled(Button)`
    color: white;
    font-weight: bolder;
    background-color: #fb9e3a;
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
    margin-right: 16px;
    &:hover {
      background-color: #f18a0a;
    }
  `;
  const { data, loading } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/deatilpage/${movie.id}`);
  };
  return (
    <>
      {loading && <Loading />}
      <Box sx={{ mt: 4 }}>
        {data.length == 0 && (
          <Typography
            sx={{ color: "white", fontSize: "2rem", fontWeight: "bolder" }}
          >
            No Data Found..
          </Typography>
        )}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data?.map((movie, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Card
                key={index}
                sx={{
                  background: "black",
                  minHeight: "90",
                  maxHeight: "90",
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    movie.poster_path
                      ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://m.media-amazon.com/images/I/716C3Gtm-qL.jpg"
                  }
                  alt={movie.title || movie.name}
                  style={{ maxHeight: "25rem", minHeight: "25rem" }}
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0.5rem",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bolder", color: "white" }}>
                      Popularity : {movie.popularity.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#FB9E3A",
                      "&:hover": {
                        background: "#f18a0a",
                      },
                    }}
                  >
                    <StyledBtn onClick={() => handleClick(movie)}>
                      Details
                    </StyledBtn>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default MoviesCards;
