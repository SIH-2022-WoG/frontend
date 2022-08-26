import { useEffect } from "react";
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  Link,
  Toolbar,
  Card,
  Icon,
  Stack,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link as Lk } from "react-router-dom";
// import { ChartBar as ChartBarIcon } from '@mui/icons-material';
// import { Cog as CogIcon } from '../icons/cog';
// import { Lock as LockIcon } from '../icons/lock';
// import { Selector as SelectorIcon } from '../icons/selector';
// import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
// import { User as UserIcon } from '../icons/user';
// import { UserAdd as UserAddIcon } from '../icons/user-add';
// import { Users as UsersIcon } from '../icons/users';
// import { XCircle as XCircleIcon } from '../icons/x-circle';
// import { Logo } from './logo';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/theses",
    icon: <ArticleIcon fontSize="small" />,
    title: "All Submitted Theses",
  },
  {
    href: "/profile",
    icon: <AccountBoxIcon fontSize="small" />,
    title: "Profile",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  //   const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  // useEffect(
  //   () => {
  //     if (!router.isReady) {
  //       return;
  //     }

  //     if (open) {
  //       onClose?.();
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [router.asPath]
  // );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Toolbar />
        <Box px={2} mb={4}>
        <Lk to="/submit">
          <Button sx={{px: 4,
                py: 2,backgroundColor: "neutral.700",
                color: "#FFFFFF",}}>
              <Stack direction="row" gap={2}>
                <AddIcon />
                <Typography>Upload Thesis</Typography>
              </Stack>
          </Button>
          </Lk>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        <Toolbar />
        <Divider />
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Toolbar />
      <Divider />
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
