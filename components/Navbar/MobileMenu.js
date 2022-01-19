import React from "react";

// Mui
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
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

export default function MobileMenu({ open, handle }) {
  //   list menu
  const ListMenu = () => (
    <BoxCustom>
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={handle}
        >
          <CloseIcons />
        </ListItem>

        <ListItem>
          <Typography
            variant="body1"
            sx={{ color: "#fff", whiteSpace: "pre-line", textAlign: "center" }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
        </ListItem>
      </List>

      <Box sx={{ textAlign: "center" }}>
        <Image src="/illustration.svg" width={200} height={200} />
      </Box>
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
