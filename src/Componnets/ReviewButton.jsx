import { Box, Button, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../slice/ReviewSlice";
import { useParams } from "react-router-dom";
function ReviewButton() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviews.data);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  let input = localStorage.getItem("isMovie");
  useEffect(() => {
    dispatch(
      fetchReviews(
        `https://api.themoviedb.org/3/${input}/${id}/reviews?language=en-US&page=1&api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }`
      )
    );
  }, [input, id, dispatch]);
  return (
    <>
      <Button
        onClick={handleOpen}
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
        Reviews
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, md: 600, lg: 600 },
            height: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {review.length === 0 && (
            <Typography sx={{ color: "balck" }}>No result found...</Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <Button onClick={handleClose}>
              <HighlightOffIcon />
            </Button>
          </Box>

          {review.map((item) => (
            <Card
              sx={{
                maxHeight: "300px",
                minHeight: "200px",
                
                margin: 2,
                background: "#e1f5fe",
                overflowY: "auto",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <Typography sx={{ color: "#01579b", fontWeight: "bolder" }}>
                  {item.author}
                </Typography>
                <Typography sx={{ color: "#01579b", fontWeight: "bolder" }}>
                  {item.created_at}
                </Typography>
              </Box>

              <Typography
                sx={{ color: "black", margin: 1, textAlign: "justify" }}
              >
                {item.content}
              </Typography>
            </Card>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default ReviewButton;
