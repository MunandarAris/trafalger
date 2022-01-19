import React from "react";

// MUI
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

// Next Js
import Image from "next/image";

// custom style
const GridCustom = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export default function AboutTwo() {
  // use theme
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <GridCustom container spacing={3}>
        <Grid item sm={6} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Download our mobile apps
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
              Download
            </Button>
          </Box>
        </Grid>

        <Grid item sm={6} md={6}>
          <Image
            src="/illustration2.svg"
            width={400}
            height={400}
            objectFit="contain"
          />
        </Grid>
      </GridCustom>
    </Container>
  );
}
