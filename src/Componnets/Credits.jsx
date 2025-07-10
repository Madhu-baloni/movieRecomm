import React, { useEffect } from "react";

import { Avatar, Box, Divider, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCredits } from "../slice/MovieCreditsSlice";

const Credits = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cast = useSelector((state) => state.casts.data);

  useEffect(() => {
    const input = localStorage.getItem("isMovie");

    try {
      let Apiurl;

      if (input === "movie") {
        Apiurl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`;
      } else {
        Apiurl = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`;

        dispatch(fetchCredits(Apiurl));
      }
    } catch (err) {
      console.log("Error fetching data :", err);
    }
  }, [id, dispatch]);

  return (
    <>
      <Box mt={2}>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
        >
          Casts
        </Typography>

        <Divider sx={{ background: "#FB9E3A" }} />

        {cast.length == 0 && (
          <Typography
            sx={{ color: "white", fontSize: "2rem", fontWeight: "bolder" }}
          >
            No Data Found..
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflow: "auto",
          }}
        >
          {cast?.map((actor) => (
            <Box sx={{ m: { xs: 2, md: 5, lg: 5 } }}>
              <Avatar
                alt={actor.name}
                src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`}
                sx={{ width: 150, height: 150 }}
              />

              <Typography
                sx={{ textAlign: "center", fontWeight: "bolder", m: 1 }}
              >
                {actor.name}
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  m: 1,
                  color: "gray",
                }}
              >
                {actor.character}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Credits;
