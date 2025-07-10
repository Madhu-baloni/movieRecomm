import axios from "axios";
import React, { useEffect, useState } from "react";

import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import QuantityTicket from "./QuantityTicket";

const PurchaseDetail = ({ setDatas }) => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  let movieId = localStorage.getItem("movieId");
  const obj = JSON.parse(localStorage.getItem("currentUser"));
  const userId = obj?.userId;

  const handleIncrease = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      savePurchaseDetails(data.title || data.name, newQuantity);
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        savePurchaseDetails(data.title || data.name, newQuantity);
        return newQuantity;
      });
    }
  };

  const savePurchaseDetails = (title, quantity) => {
    const totalPrice = 30 * quantity;
    const purchaseDetail = {
      title,
      quantity,
      totalPrice,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime.toLocaleTimeString(),
      userId: userId,
    };
    const existingPurchase =
      JSON.parse(localStorage.getItem("purchaseDetails")) || [];
    existingPurchase.push(purchaseDetail);
    setDatas(existingPurchase);
  };

  useEffect(() => {
    const input = localStorage.getItem("isMovie");

    const fetchMovie = async () => {
      let apiUrl = `https://api.themoviedb.org/3/${input}/${movieId}?language=en-US&api_key=${
        import.meta.env.VITE_SECRET_API_KEY
      }`;
      const response = await axios.get(apiUrl);
      setData(response.data);
      savePurchaseDetails(response.data.title || response.data.name, quantity);
    };
    fetchMovie();
  }, [movieId, quantity]);

  return (
    <>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Card sx={{ minHeight: "26rem", maxHeight: "26rem", mt: "1.5rem" }}>
            <Typography
              sx={{
                p: 1,
                background: "#FB9E3A",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Purchase details
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 6, md: 6 }}>
                <img
                  src={
                    data.poster_path
                      ? `http://image.tmdb.org/t/p/w500${data.poster_path}`
                      : `https://m.media-amazon.com/images/I/716C3Gtm-qL.jpg`
                  }
                  alt={data.original_title}
                  style={{
                    width: "100%",
                    maxHeight: "10rem",
                    minHeight: "10rem",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 6, md: 6 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1rem", p: 1 }}>
                  {data.title || data.name || data.original_name}
                </Typography>

                <QuantityTicket
                  quantity={quantity}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              </Grid>
            </Grid>

            <Stack direction="column" spacing={2} m={3}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 2 }} fullWidth />
                )}
              />
              <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={(newTime) => setSelectedTime(newTime)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 2 }} fullWidth />
                )}
              />
            </Stack>

            <Typography sx={{ m: 3, fontSize: "1rem", fontWeight: "bold" }}>
              Total Price of your ticket : ₹ {30 * quantity}
            </Typography>
          </Card>
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default PurchaseDetail;
