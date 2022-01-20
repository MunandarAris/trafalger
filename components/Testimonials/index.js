import React from "react";

// MUI
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// custom styles
const ContainerCustom = styled(Container)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "10px",
  position: "relative",
}));
const ImageCustom = styled(Box)(({ theme }) => ({
  borderRadius: "100%",
  border: "3px solid #fff",
  backgroundImage: "url(/user1.png)",
  width: 80,
  height: 80,
  backgroundSize: "cover",
  [theme.breakpoints.only("xs")]: {
    margin: "auto",
  },
}));
const GridContainerCustome = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    textAlign: "center",
  },
}));
const ImageCustomElement = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  [theme.breakpoints.only("xs")]: {
    top: 60,
  },
}));
const ImageCustomElementOne = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 20,
  left: -40,
  zIndex: -1,
}));

export default function Testimonial() {
  return (
    <ContainerCustom maxWidth="md" id="testimonials">
      <ImageCustomElement src="/elementFooter.png" width={60} height={60} />
      <ImageCustomElementOne src="/element.png" width={60} height={60} />

      <Box
        sx={{
          textAlign: "center",
        }}
        paddingY={2}
      >
        <Typography sx={{ color: "#fff" }} variant="h6" marginBottom={2}>
          What our customer are saying
        </Typography>

        <Box
          sx={{
            height: ".1rem",
            width: "8%",
            backgroundColor: "#fff",
            margin: "auto",
          }}
        ></Box>
      </Box>

      <GridContainerCustome
        container
        alignItems="center"
        justifyContent="center"
        paddingBottom={4}
        paddingTop={3}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Grid
            container
            alignItems="center"
            sx={{
              justifyContent: { xs: "flex-end", sm: "center" },
            }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <ImageCustom data-aos="flip-left" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  margin: { xs: ".4rem", sm: "0rem" },
                }}
              >
                Edward Newgate
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontWeight: "100",
                  margin: { xs: ".4rem", sm: "0rem" },
                }}
              >
                Founder Circle
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontWeight: "100",
            }}
          >
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Typography>
        </Grid>
      </GridContainerCustome>
    </ContainerCustom>
  );
}
