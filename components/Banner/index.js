import React from "react";

// Mui
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

// Next Js
import Image from "next/image";

// custom style
const ImageElement = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 200,
  objectFit: "contain",
  width: 100,
  height: 100,
  [theme.breakpoints.up("sm")]: {
    left: -10,
  },
  [theme.breakpoints.only("xs")]: {
    right: 0,
    bottom: 350,
  },
}));

export default function Banner() {
  // use theme
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }} id="home">
      <ImageElement src="/element.png" />

      <Container maxWidth="md">
        <Grid
          container
          sx={{ paddingTop: "5rem", alignItems: "center" }}
          spacing={3}
        >
          <Grid item sm={6} md={6} data-aos="fade-right">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Virtual healthcare for you
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#7D7987",
                margin: "1.6rem 0rem",
              }}
            >
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                padding: ".6rem 1.4rem",
                borderRadius: "100px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.mainHover,
                },
              }}
            >
              Consult today
            </Button>
          </Grid>

          <Grid
            item
            sm={6}
            md={6}
            sx={{ textAlign: "center" }}
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <Image
              src="/illustration.svg"
              width={400}
              height={400}
              alt=""
              objectFit="contain"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
