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
function MoviesCards() {
  const { data, loading } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    localStorage.setItem("isMovie", movie.media_type);
    navigate(`/deatilpage/${movie.id}`);
  };
  return (
    <>
      {loading && <Loading />}
      <Box sx={{ mt: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data?.map((movie, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Card
                key={index}
                sx={{
                  background: "black",
                  minHeight: "100",
                  maxHeight: "100",
                }}
              >
                <CardMedia
                  component="img"
                  image={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
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
                      Popularity : {movie.popularity}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#FB9E3A",
                    }}
                  >
                    <Button
                      onClick={() => handleClick(movie)}
                      sx={{
                        color: "white",
                        fontWeight: "bolder",
                        background: "#FB9E3A",
                        mr: 2,
                        px: 3,
                        cursor: "pointer",
                      }}
                    >
                      Details
                    </Button>
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
