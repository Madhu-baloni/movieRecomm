import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Box } from "@mui/material";
function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Box sx={{ minHeight: '39rem' }}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
}

export default Layout;
