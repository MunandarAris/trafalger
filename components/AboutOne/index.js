import React from "react";

// MUI
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/system";

// Next Js
import Image from "next/image";

// custom tehem
const ImageCustom = styled(Image)(({ theme }) => ({
  objectFit: "contain",
}));

export default function AboutOne() {
  // use theme
  const theme = useTheme();

  return (
    <Container maxWidth="md" id="about-us" sx={{ overflowX: "hidden" }}>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            margin: { xs: "auto", sm: "0rem" },
          }}
          data-aos="fade-left"
        >
          <ImageCustom src="/illustration1.svg" width={400} height={400} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Leading healthcare providers
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.secondary.main, margin: "1.6rem 0rem" }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Typography>

          <Box sx={{ margin: "2.7rem 0rem" }}>
            <Button
              sx={{
                textTransform: "none",
                border: `1px solid ${theme.palette.primary.main}`,
                padding: ".5rem 1.6rem",
                borderRadius: "100px",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
