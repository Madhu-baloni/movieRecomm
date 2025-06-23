import {
  Box,
  Button,
  Card,
  Container,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userId: Math.random() * 1000000,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (event) => {
  //   event.preventDefault();
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrorMsg("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.email || !formData.password) {
      setErrorMsg("Email and password field are required");
      return;
    }
    if (isSignup) {
      const existingUser = JSON.parse(localStorage.getItem("users")) || [];
      const userexist = existingUser.some(
        (user) => user.email === formData.email
      );
      if (userexist) {
        setErrorMsg("user is already exists");
        return;
      }
      existingUser.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUser));
      alert("signup successfully, now you can login");
      toggleForm();
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        alert("Login Successfully");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "/";
      } else {
        setErrorMsg("invalid email password, please signup");
      }
    }
  };

  return (
    <>
      <Container>
        <form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              mt: 5,
              mb: 1,
            }}
          >
            <Card
              sx={{
                maxHeight: { xs: "40rem", md: "32rem" },
                minHeight: { xs: "40rem", md: "32rem" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  background: "#f18a0a",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                  p: 1,
                }}
              >
                {isSignup ? "Sign Up" : "Login"}
              </Typography>
              <Box sx={{ m: 4 }}>
                {!isSignup && (
                  <Typography
                    sx={{
                      color: "red",
                      textAlign: "center",
                      fontWeight: "bolder",
                    }}
                  >
                    {errorMsg}
                  </Typography>
                )}
                <Grid container spacing={3}>
                  {isSignup && (
                    <>
                      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                        <TextField
                          variant="filled"
                          label="First Name "
                          type="text"
                          name="firstname"
                          required
                          fullWidth
                          value={formData.firstname}
                          onChange={handleInputChange}
                          sx={{ mt: 3, background: "white" }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                        <TextField
                          variant="filled"
                          label="last Name "
                          type="text"
                          name="lastname"
                          required={isSignup}
                          fullWidth
                          value={formData.lastname}
                          onChange={handleInputChange}
                          sx={{ mt: 3, background: "white" }}
                        />
                      </Grid>
                    </>
                  )}

                  <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <TextField
                      variant="filled"
                      label="Email "
                      type="email"
                      name="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={handleInputChange}
                      sx={{ mt: 3, background: "white" }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <TextField
                      variant="filled"
                      label="Password "
                      type="password"
                      name="password"
                      required
                      fullWidth
                      value={formData.password}
                      onChange={handleInputChange}
                      sx={{ mt: 3, background: "white" }}
                    />
                    {/* <FormControl
                      variant="filled"
                      required
                      fullWidth
                      value={formData.password}
                      onChange={handleInputChange}
                      label="Password "
                      type="password"
                      name="password"
                    >
                      <InputLabel htmlFor="filled-adornment-password">
                        Password
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword
                                  ? "hide the password"
                                  : "display the password"
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl> */}
                  </Grid>
                </Grid>
                <Box sx={{ textAlign: "center", m: 5 }}>
                  <Button
                    onClick={handleSubmit}
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
                    {isSignup ? "Sign up" : "Login"}
                  </Button>
                  <Button onClick={toggleForm} sx={{ color: "#f18a0a" }}>
                    {isSignup
                      ? "Already have an account? Login"
                      : "Don't have an account? Sign Up"}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default LoginPage;
