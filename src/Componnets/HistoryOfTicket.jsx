import { Box, Card, Typography } from "@mui/material";
import React from "react";

function HistoryOfTicket() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const data = JSON.parse(localStorage.getItem("purchaseDetails"));
  const userId = currentUser.userId;
  return (
    <Card
      sx={{
        minHeight: "30rem",
        maxHeight: "30rem",
        width: "100%",
        overflowY: "auto",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          background: "#f18a0a",
          color: "white",
          fontWeight: "bolder",
          p: 1,
        }}
      >
        History of Booked Tickets
      </Typography>
      <Box sx={{ p: 2 }}>
        {data?.length > 0 ? (
          data
            .filter((item) => item.userId === userId)
            .map((purchase, index) => (
              <Box
                key={index}
                sx={{
                  m: 4,
                  mt: { xs: 12, md: 8 },
                  p: 2,
                  border: "1px solid #ccc",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">
                  Movie name: {purchase.title}
                </Typography>
                <Typography variant="h6">
                  Quantity: {purchase.quantity}
                </Typography>
                <Typography variant="h6">
                  Price: ${purchase.totalPrice}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Date: {purchase.date} | Time: {purchase.time}
                </Typography>
              </Box>
            ))
        ) : (
          <Typography>No tickets booked yet.</Typography>
        )}
      </Box>
    </Card>
  );
}

export default HistoryOfTicket;
