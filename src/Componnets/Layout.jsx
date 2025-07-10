import React from "react";

import { Box } from "@mui/material";

import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Box sx={{ minHeight: "39rem" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
