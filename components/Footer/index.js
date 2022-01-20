import React from "react";

// MUI
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

// Next Js
import Image from "next/image";

// fake data
const region = ["Indonesian", "Singapore", "Hongkong", "Canada"];
const help = ["Help center", "Contact support", "Intructions", "How it works"];
const company = ["About", "Testimonials", "Find a doctor", "Apps"];

// custom style
const ImageCustom = styled("img")(({ theme }) => ({
  position: "absolute",
  [theme.breakpoints.only("xs")]: {
    bottom: 4,
    right: 7,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.only("sm")]: {
    bottom: 4,
    right: 7,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.up("md")]: {
    bottom: 4,
    left: 5,
    width: 60,
    height: 50,
  },
}));

const ImageCustomTwo = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: "-1",
  [theme.breakpoints.only("xs")]: {
    top: -40,
    right: 5,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.only("sm")]: {
    top: -40,
    right: 5,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.up("md")]: {
    top: -40,
    right: 5,
    width: 60,
    height: 50,
  },
}));

export default function Footer() {
  // use theme
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ImageCustomTwo src="/elementFooter1.png" />

      <Container maxWidth="md" sx={{ padding: "5rem 0rem" }}>
        <Grid container justifyContent="space-between" alignItems="baseline">
          <Grid item xs={12} sm={12} md={3} paddingX={2} data-aos="fade-up">
            <Image
              src="/footer.png"
              width={90}
              height={25}
              objectFit="contain"
            />

            <Typography
              variant="body2"
              color="#fff"
              marginY={2}
              fontWeight={100}
            >
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>

            <Typography variant="body2" color="#fff" fontWeight={100}>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </Typography>
          </Grid>

          <Grid
            item
            sm={4}
            md={2}
            paddingX={2}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Typography
              variant="body2"
              color="#fff"
              marginY={2}
              fontWeight="bold"
            >
              Company
            </Typography>

            {company.map((item, index) => (
              <Typography
                variant="body2"
                color="#fff"
                marginY={1}
                key={index}
                fontWeight={100}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            sm={4}
            md={2}
            paddingX={2}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              variant="body2"
              color="#fff"
              marginY={2}
              fontWeight="bold"
            >
              Region
            </Typography>

            {region.map((item, index) => (
              <Typography
                variant="body2"
                color="#fff"
                marginY={1}
                key={index}
                fontWeight={100}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            sm={4}
            md={2}
            paddingX={2}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="body2"
              color="#fff"
              marginY={2}
              fontWeight="bold"
            >
              Help
            </Typography>

            {help.map((item, index) => (
              <Typography
                variant="body2"
                color="#fff"
                marginY={1}
                key={index}
                fontWeight={100}
              >
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>

      <ImageCustom src="/elementFooter.png" />
    </Box>
  );
}
