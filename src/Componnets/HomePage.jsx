import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Container } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import posterData from "../DummmyData/posterData";
import HeroPage from "./TabPage";

const HomePage = () => {
  return (
    <>
      <Container>
        <Box sx={{ mt: 0 }}>
          <Carousel
            autoPlay
            interval={2500}
            showThumbs={false}
            infiniteLoop
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    left: 15,
                    top: "40%",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    p: 1,
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  aria-label={label}
                >
                  <ArrowBackIos fontSize="inherit" />
                </Box>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    right: 15,
                    top: "40%",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    p: 1,
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  aria-label={label}
                >
                  <ArrowForwardIos fontSize="inherit" />
                </Box>
              )
            }
          >
            {posterData.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={`poster-${index}`}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "auto",
                  maxHeight: "41rem",
                }}
              />
            ))}
          </Carousel>
        </Box>

        <HeroPage />
      </Container>
    </>
  );
};

export default HomePage;
