import { useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery, Link, Toolbar } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/dashboard',
    icon: (<DashboardIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/theses',
    icon: (<ArticleIcon fontSize="small" />),
    title: 'All Submitted Theses'
  },
  {
    href: '/products',
    // icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    // icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    // icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    // icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    // icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    // icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
//   const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
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
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
      <Toolbar />
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
        <Divider sx={{ borderColor: '#2D3748' }} />
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
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
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
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
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
  open: PropTypes.bool
};