import React from "react";

// MUI
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

// icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// fake data
const data = [
  {
    url: "/blog1.png",
    title: "Disease detection, check up in the laboratory",
    desc: "In this case, the role of the health laboratory is very important to do a disease detection",
  },
  {
    url: "/blog2.png",
    title: "Herbal medicines that are safe for consumption",
    desc: "Herbal medicine is very widely used at this time because of its very good for your health",
  },
  {
    url: "/blog3.png",
    title: "Natural care for healthy facial skin",
    desc: "A healthy lifestyle should start from now and also for your skin health. There are some",
  },
];

// custom style
const ImageCustom = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: "-1",
  [theme.breakpoints.only("xs")]: {
    top: 10,
    left: 16,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.only("sm")]: {
    top: 10,
    left: 5,
    width: 60,
    height: 50,
  },
  [theme.breakpoints.up("md")]: {
    top: 10,
    left: 5,
    width: 60,
    height: 50,
  },
}));

const ImageCustomOne = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: "-1",
  [theme.breakpoints.only("xs")]: {
    top: -5,
    right: 0,
    width: "30%",
    height: "10%",
  },
  [theme.breakpoints.only("sm")]: {
    top: -40,
    right: 0,
    width: "40%",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    top: -40,
    right: 0,
    width: "40%",
    height: "100%",
  },
}));

export default function Articles() {
  // use theme
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
      }}
      id="blog"
    >
      <ImageCustomOne src="/element2.png" />

      <Container maxWidth="md">
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
            marginTop={7}
            marginBottom={2}
          >
            Check out our latest article
          </Typography>

          <Box
            sx={{
              height: ".1rem",
              width: "8%",
              backgroundColor: "#000000",
              margin: "auto",
            }}
          ></Box>
        </Box>

        <Grid
          container
          spacing={3}
          marginTop={3}
          alignItems="center"
          justifyContent="center"
          style={{
            position: "relative",
          }}
        >
          <ImageCustom src="/elementFooter1.png" />

          {data.map((item, index) => (
            <Grid
              item
              sm={6}
              md={4}
              key={index}
              data-aos="flip-left"
              data-aos-delay={100 * index}
            >
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "10px 10px 10px 2px #F3F7FF",
                }}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.url}
                  alt="blog"
                />
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: `${theme.palette.secondary.main}`,
                    }}
                    marginTop={2}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    size="small"
                    sx={{
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "#fff",
                      },
                    }}
                  >
                    Read more{" "}
                    <ArrowForwardIcon
                      sx={{ fontSize: ".9rem", marginLeft: ".3rem" }}
                    />
                  </Button>
                </CardActions>
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
