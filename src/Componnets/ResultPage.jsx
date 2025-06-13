import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults } from "../slice/MoviesSlice";
import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  let input = localStorage.getItem("isMovie");
  const location = useLocation();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.movies.data);
  const searchMovie = location.state?.searchMovie || "";
  const handleClick = (movie) => {
    localStorage.setItem("isMovie", movie.media_type);
    navigate(`/deatilpage/${movie.id}`);
  };
  useEffect(() => {
    if (searchMovie) {
      const apiUrl = `https://api.themoviedb.org/3/search/${input}?query=${searchMovie}&include_adult=false&language=en-US&page=1&api_key=${
        import.meta.env.VITE_SECRET_API_KEY
      }`;
      dispatch(fetchResults(apiUrl));
    }
  }, [dispatch, searchMovie, input]);

  return (
    <>
      <Container mt={2}>
        <Box sx={{ m: 2 }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
          >
            Results
          </Typography>
          <Divider sx={{ background: "#FB9E3A" }} />
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {result?.map((movie, index) => (
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
      </Container>
    </>
  );
}

export default ResultPage;
