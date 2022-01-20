import React from "react";

// MUI
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

// Next js
import Image from "next/image";

// data service
import { serviceData } from "../../constant/FakeData/service";

// Custom style
const ImageCustomElement = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "50%",
  height: "60%",
  zIndex: -1,
  top: 130,
  [theme.breakpoints.only("xs")]: {
    width: "50%",
    height: "10%",
    top: 400,
  },
}));
const ImageCustomElementOne = styled("img")(() => ({
  position: "absolute",
  zIndex: -1,
  top: 320,
  right: -20,
}));

export default function Service() {
  // use theme
  const theme = useTheme();

  return (
    <Box
      style={{ position: "relative", overflowX: "hidden" }}
      id="find-a-doctor"
    >
      <ImageCustomElement src="/vector.png" />

      <Container
        maxWidth="md"
        sx={{
          marginTop: "5rem",
          position: "relative",
        }}
      >
        <ImageCustomElementOne
          src="/elementFooter1.png"
          width={100}
          height={100}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our Service
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.secondary.main,
              margin: "1.6rem 0rem",
            }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ marginTop: "0" }}>
          {serviceData.map((item, index) => (
            <Grid item sm={4} md={4} key={index} data-aos="fade-up">
              <Card
                sx={{
                  boxShadow: "8px 10px 20px #F3F7FF",
                  borderRadius: "20px",
                }}
                elevation={0}
              >
                <CardContent>
                  <Image
                    src={item.img}
                    width={40}
                    height={40}
                    alt="Search"
                    objectFit="contain"
                  />

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", margin: ".7rem 0rem" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", margin: "2.7rem 0rem" }}>
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
      </Container>
    </Box>
  );
}
