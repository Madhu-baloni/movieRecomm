import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchRecomm } from "../slice/MoviesSlice";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

import Credits from "./Credits";
import Crews from "./Crews";
import Recommendation from "./Recommendation";
import ReviewButton from "./ReviewButton";

const MovieDetailPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/checkout");
    localStorage.setItem("movieId", id);
  };

  useEffect(() => {
    const input = localStorage.getItem("isMovie");

    const fetchData = async () => {
      try {
        let apiUrl;
        if (input === "movie") {
          apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${
            import.meta.env.VITE_SECRET_API_KEY
          }`;
        } else {
          apiUrl = `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${
            import.meta.env.VITE_SECRET_API_KEY
          }`;
        }
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    dispatch(
      fetchRecomm(
        `https://api.themoviedb.org/3/${input}/${id}/recommendations?language=en-US&page=1&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`
      )
    );
  }, [id, dispatch]);

  return (
    <>
      <Container mt={2}>
        <Box
          sx={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            padding: "2rem",
            color: "white",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: 3,
                  display: { xs: "none", md: "inline", lg: "inline" },
                }}
              >
                <img
                  src={
                    data.poster_path
                      ? `http://image.tmdb.org/t/p/w500${data.poster_path}`
                      : `https://m.media-amazon.com/images/I/716C3Gtm-qL.jpg`
                  }
                  alt={data.original_title}
                  style={{
                    width: { xs: "20rem", md: "100%" },
                    maxHeight: "30rem",
                    minHeight: "30rem",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#FB9E3A",
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" },
                  mb: 2,
                }}
              >
                {data.title || data.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: "1.2rem", mb: 2, textAlign: "justify" }}
              >
                {data.overview}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Release Date: {data.release_date || data.first_air_date}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Rating: {data.vote_average}
              </Typography>

              <Box sx={{ display: "flex" }}>
                <ReviewButton />
                <Button
                  onClick={handleClick}
                  sx={{
                    color: "white",
                    fontWeight: "bolder",
                    background: "#FB9E3A",
                    mr: 2,
                    px: 3,
                    cursor: "pointer",
                    "&:hover": {
                      background: "#f18a0a",
                    },
                  }}
                >
                  Buy Ticket
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Credits />
        <Crews />
        <Recommendation />
      </Container>
    </>
  );
};

export default MovieDetailPage;
