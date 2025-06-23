import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HistoryOfTicket from "./HistoryOfTicket";

function ProfilePage() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    userId: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Card sx={{ minHeight: "30rem", maxHeight: "30rem" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  background: "#f18a0a",
                  color: "white",
                  fontWeight: "bolder",
                  p: 1,
                }}
              >
                User Profile
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  m: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: "8rem",
                    height: "8rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {user.firstname
                    ? user.firstname.charAt(0).toUpperCase()
                    : "U"}
                </Avatar>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  m: 3,
                }}
              >
                <Typography sx={{ fontWeight: "bolder" }}>
                  Full Name:
                </Typography>
                <Typography sx={{ fontWeight: "bolder" }}>
                  {user.firstname + " " + user.lastname}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  m: 3,
                }}
              >
                <Typography sx={{ fontWeight: "bolder" }}>Email:</Typography>
                <Typography sx={{ fontWeight: "bolder" }}>
                  {user.email}
                </Typography>
              </Box>
            </Card>
            <Button
              onClick={handleLogout}
              sx={{
                color: "white",
                fontWeight: "bolder",
                background: "#FB9E3A",
                mt: 1,
                px: 3,
                cursor: "pointer",
                "&:hover": {
                  background: "#f18a0a",
                },
              }}
            >
              Logout
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <HistoryOfTicket />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProfilePage;
