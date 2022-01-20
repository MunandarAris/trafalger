import React from "react";

// Mui
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

// icons
import { Close } from "@mui/icons-material";

// next js
import Image from "next/image";

// custom style
const BoxCustom = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
}));

const openedMixin = (theme) => ({
  width: "70%",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerCustom = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== false,
})(({ theme, open }) => ({
  width: "70%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const CloseIcons = styled(Close)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: "#fff",
}));

// link menu
const LinkMenu = [
  {
    title: "Home",
    url: "home",
  },
  {
    title: "Find a doctor",
    url: "find-a-doctor",
  },
  {
    title: "Blog",
    url: "blog",
  },
  {
    title: "Testimonials",
    url: "testimonials",
  },
  {
    title: "About us",
    url: "about-us",
  },
];

export default function MobileMenu({ open, handle }) {
  //   list menu
  const ListMenu = () => (
    <BoxCustom>
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image src="/footer.png" width={110} height={30} />

          <CloseIcons onClick={handle} />
        </ListItem>

        <Divider sx={{ backgroundColor: "#fff", marginTop: ".4rem" }} />

        {LinkMenu?.map((item, index) => (
          <ListItem key={index} sx={{ marginTop: ".9rem" }}>
            <a
              href={`#${item.url}`}
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
              onClick={handle}
            >
              {item.title}
            </a>
          </ListItem>
        ))}
      </List>
    </BoxCustom>
  );

  return (
    <>
      <DrawerCustom
        anchor="left"
        open={open}
        sx={{ display: { md: "none", lg: "none" } }}
        elevation={0}
        onClose={handle}
      >
        {ListMenu()}
      </DrawerCustom>
    </>
  );
}
