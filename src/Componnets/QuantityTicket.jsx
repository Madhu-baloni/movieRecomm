import { Box, Button, Stack, Typography } from "@mui/material";

const QuantityTicket = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bolder", fontSize: "1.2rem", p: 1 }}>
        Quantity...
      </Typography>

      <Stack direction="row" spacing={4}>
        <Box
          sx={{
            background: "#FB9E3A",
            width: "1.5rem",
            height: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Button
            onClick={onDecrease}
            sx={{
              fontWeight: "bolder",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            -
          </Button>
        </Box>

        <Typography sx={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          {quantity}
        </Typography>

        <Box
          sx={{
            background: "#FB9E3A",
            width: "1.5rem",
            height: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Button
            onClick={onIncrease}
            sx={{
              fontWeight: "bolder",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            +
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default QuantityTicket;
