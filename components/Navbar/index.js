import React from "react";

// Mui
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  Container,
  useScrollTrigger,
} from "@mui/material";
import { Box, styled } from "@mui/system";

// icons
import { Menu } from "@mui/icons-material";
import MobileMenu from "./MobileMenu";

// next js
import PropTypes from "prop-types";

// custom styles
const Navigation = styled(AppBar)(() => ({
  backgroundColor: "#fff",
}));
const BoxWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
const Logo1 = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: ".1rem .7rem",
  borderRadius: "100%",
  fontWeight: "bold",
}));
const Logo2 = styled(Typography)(() => ({
  color: "#000000",
  marginLeft: ".5rem",
  fontWeight: "bold",
}));
const BoxMenu = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
const MenuLink = styled(Typography)(({ theme }) => ({
  color: "#1F1534",
  fontWeight: "500",
  marginLeft: "1.8rem",
  cursor: "pointer",
  transition: ".3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
const TolBar = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const Humberger = styled(Typography)(() => ({
  color: "#1F1534",
  display: "flex",
  alignItems: "center",
}));

export default function Navbar(props) {
  // init menu open
  const [open, setOpen] = React.useState(false);

  // handle open drawer
  const handleDrawerOpenMenu = () => {
    setOpen(!open);
  };

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <>
      <HideOnScroll {...props}>
        <Navigation elevation={0}>
          <Container
            sx={{
              padding: { xs: "0rem" },
            }}
            maxWidth="lg"
          >
            <TolBar>
              <BoxWrapper>
                <Logo1 variant="h6">T</Logo1>
                <Logo2 variant="h6">Trafalgar</Logo2>
              </BoxWrapper>

              <BoxMenu sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <MenuLink variant="body1">
                  <a
                    href="#home"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </a>
                </MenuLink>
                <MenuLink variant="body1">
                  <a
                    href="#find-a-doctor"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Find a doctor{" "}
                  </a>
                </MenuLink>
                <MenuLink variant="body1">
                  <a
                    href="#blog"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </MenuLink>
                <MenuLink variant="body1">
                  <a
                    href="#testimonials"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Testimonials{" "}
                  </a>
                </MenuLink>
                <MenuLink variant="body1">
                  <a
                    href="#about-us"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    About us{" "}
                  </a>
                </MenuLink>
              </BoxMenu>

              <BoxMenu sx={{ display: { md: "none", lg: "none" } }}>
                <Humberger variant="h5" onClick={handleDrawerOpenMenu}>
                  <Menu />
                </Humberger>
              </BoxMenu>
            </TolBar>
          </Container>
        </Navigation>
      </HideOnScroll>

      {/* Mobile Menu */}
      <MobileMenu open={open} handle={handleDrawerOpenMenu} />
    </>
  );
}
