import { useEffect } from "react";

import { Avatar, Box, Divider, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCrews } from "../slice/MovieCrewsSlice";

function Crews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const crew = useSelector((state) => state.crews.data);

  useEffect(() => {
    const input = localStorage.getItem("isMovie");

    try {
      let apiurl;

      if (input === "movie") {
        apiurl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`;
      } else {
        apiurl = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`;
      }
      dispatch(fetchCrews(apiurl));
    } catch (err) {
      console.log("Error fetching:", err);
    }
  }, [id, dispatch]);

  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
        >
          Crews
        </Typography>

        <Divider sx={{ background: "#FB9E3A" }} />

        {crew.length == 0 && (
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
          {crew?.map((actor) => (
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
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Crews;
