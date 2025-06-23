import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <AppBar position="sticky" sx={{ background: "black" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            onClick={handleClick}
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#FB9E3A",
            }}
          >
            Movie
            <span
              style={{
                fontFamily: "cursive",
                color: "red",
                fontWeight: "bolder",
              }}
            >
              &
            </span>
            tation
          </Typography>{" "}
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              flex: 1,
            }}
          >
            <SearchInput />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <DropDownMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
