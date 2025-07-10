import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import { Box, Button, Modal, Typography } from "@mui/material";

const Payment = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));

  const handleClicks = () => {
    if (!loggedIn) {
      alert("please login");
      navigate("/login");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    handleClick();
    toast("Your ticket has been confirmed", {
      icon: "👏",
      duration: 5000,
      style: {
        color: "green",
        borderRadius: "10px",
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Toaster />

      <Box sx={{ m: 3 }}>
        <Button
          onClick={handleClicks}
          sx={{
            color: "white",
            fontWeight: "bolder",
            background: "#FB9E3A",
            px: 3,
            cursor: "pointer",
            "&:hover": {
              background: "#f18a0a",
            },
          }}
        >
          Payment
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 200, md: 300, lg: 300 },
            height: 200,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Your ticket booking has been confirmed.
          </Typography>

          <Button
            onClick={handleClose}
            sx={{
              color: "white",
              fontWeight: "bolder",
              background: "#FB9E3A",
              mt: 2,
              mr: 2,
              px: 3,
              cursor: "pointer",
              "&:hover": {
                background: "#f18a0a",
              },
            }}
          >
            Ok
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Payment;
