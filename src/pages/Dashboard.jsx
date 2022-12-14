import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { DashboardNavbar } from './dashboard-navbar';
// import { DashboardSidebar } from './sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {DashboardSidebar} from "../components/dashboard/sidebar"

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const Dashboard = (props) => {
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {/* <Router>
            <Routes>
              <Route path="/dashboard" delement={<Dashboardmain />} />
            </Routes>
          </Router> */}
          {props.element}
        </Box>
      </DashboardLayoutRoot>
      {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
      <DashboardSidebar
        onClose={() => props.setSidebarOpen(false)}
        open={props.isSidebarOpen}
      />
    </>
  );
};
