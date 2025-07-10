import React, { useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import BillingAddress from "./BillingAddress";
import InformationForm from "./InformationForm";
import Payment from "./Payment";
import PurchaseDetail from "./PurchaseDetail";

const CheckoutPage = () => {
  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    localStorage.setItem("purchaseDetails", JSON.stringify(datas));
  };

  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <form>
            <Grid container spacing={2}>
              <Grid>
                <Box sx={{ display: "flex", m: 1 }}>
                  <LooksOneIcon />
                  <Typography sx={{ fontWeight: "bold", color: "#FB9E3A" }}>
                    Your basic information
                  </Typography>
                </Box>
                <InformationForm />
              </Grid>

              <Grid size={{ xs: 12, md: 12 }}>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <LooksTwoIcon />
                  <Typography sx={{ fontWeight: "bold", color: "#FB9E3A" }}>
                    Billing Address
                  </Typography>
                </Box>
                <BillingAddress />
              </Grid>

              <Grid>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Looks3Icon />
                  <Typography sx={{ fontWeight: "bold", color: "#FB9E3A" }}>
                    Your Payment Information
                  </Typography>
                </Box>
                <Payment handleClick={handleClick} />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <PurchaseDetail setDatas={setDatas} />
          <Box mt={3}>
            <Typography
              sx={{
                p: 1,
                background: "#FB9E3A",
                color: "white",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Plan Details
            </Typography>
            <img
              src={`https://static.vecteezy.com/system/resources/previews/011/835/060/non_2x/retro-movie-ticket-png.png`}
              style={{
                minHeight: "8rem",
                maxHeight: "8rem",
                width: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
