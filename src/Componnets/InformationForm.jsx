import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function InformationForm() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 6 }}>
        <TextField
          variant="filled"
          label="First Name"
          type="text"
          name="firstname"
          value={user.firstname}
          required
          fullWidth
          sx={{ mt: 3, background: "white" }}
        />
      </Grid>
      <Grid size={{ xs: 6, md: 6 }}>
        <TextField
          variant="filled"
          label="Last Name"
          type="text"
          name="lastname"
          value={user.lastname}
          required
          fullWidth
          sx={{ mt: 3, background: "white" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 12 }} sx={{ mt: 3 }}>
        <TextField
          variant="filled"
          label="Enter email"
          type="email"
          name="email"
          value={user.email}
          required
          fullWidth
          sx={{ background: "white" }}
        />
      </Grid>
    </Grid>
  );
}

export default InformationForm;
