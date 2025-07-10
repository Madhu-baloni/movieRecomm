import React, { useEffect, useState } from "react";

import axios from "axios";

import { Grid, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const BillingAddress = () => {
  const [location, setLocation] = useState(null);
  const [cinemas, setCinemas] = useState([]);

  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchCinemas = async () => {
    if (location) {
      try {
        const { latitude, longitude } = location;
        const apiKey = import.meta.env.VITE_SECRET_CINEMAS_API_KEY;
        const r = 2000;
        const type = "movie_theater";
        const googlePlacesUrl = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&lat=${latitude}&lon=${longitude}&radius=${r}
          $type=${type}&apiKey=${apiKey}`;
        const response = await axios.get(googlePlacesUrl);
        setCinemas(response.data.features);
      } catch (error) {
        console.error("Error fetching cinemas", error);
      }
    }
  };

  useEffect(() => {
    if (location) {
      fetchCinemas();
    }
  }, [location]);

  return (
    <>
      <Grid container mt={4} spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Autocomplete
            disablePortal
            sx={{ fontColor: "black" }}
            options={cinemas}
            getOptionLabel={(option) =>
              option.properties.name +
                "," +
                option.properties.state +
                "," +
                option.properties.county || ""
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Near by cinema"
                sx={{
                  background: "white",
                  color: "black",
                  width: { xs: "100%", md: "80%" },
                }}
                variant="filled"
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BillingAddress;
