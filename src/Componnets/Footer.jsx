import React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <Container>
      <Divider sx={{ background: "#FB9E3A" }} />

      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <Typography variant="h6" noWrap href="#app-bar-with-responsive-menu">
            Movie
            <span
              style={{
                fontFamily: "cursive",
                color: "red",
                fontWeight: "bolder",
                fontSize: "3rem",
              }}
            >
              &
            </span>
            tation
          </Typography>

          <Typography>Reach out to your favourites</Typography>

          <Box>
            <Button sx={{ color: "black" }}>
              Read More{" "}
              <span>
                <ArrowForwardIcon mt={"4.3px"} />
              </span>
            </Button>
          </Box>

          <Stack direction="row" spacing={2}>
            <FacebookIcon />
            <TwitterIcon />
            <WhatsAppIcon />
            <InstagramIcon />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <List>
            <ListItem sx={{ mt: 2, fontWeight: "bold" }}>Company</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Case Studies</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Contact Us</ListItem>
          </List>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <List>
            <ListItem sx={{ mt: 2, fontWeight: "bold" }}>Community</ListItem>
            <ListItem>Resources </ListItem>
            <ListItem>Faqs</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Careers</ListItem>
          </List>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <List>
            <ListItem sx={{ mt: 2, fontWeight: "bold" }}>Get in touch</ListItem>
            <ListItem>
              <span>
                <EmailIcon />
              </span>
              support@movie<span style={{ color: "red" }}>&</span>
              tation.com
            </ListItem>
            <ListItem>
              <span>
                <CallIcon />
              </span>
              +(642) 342 762 44
            </ListItem>
            <ListItem>
              <span>
                <LocationPinIcon />
              </span>
              442 Belle Terre St Floor 7, San Francisco, AV 4206
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Divider sx={{ background: "#FB9E3A", mb: 1 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          Copyright © 2021 movie<span style={{ color: "red" }}>&</span>
          tation. All rights reserved.
        </Typography>

        <ScrollButton />
      </Box>
    </Container>
  );
};

export default Footer;
