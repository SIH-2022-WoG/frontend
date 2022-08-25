import React from "react";
import { v4 as uuid } from 'uuid';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import InfoCard from "./Infocard";
import {Submissions} from "./Table";

const data = [
  {
    id: uuid(),
    ref: 'Dr. John Smith',
    amount: 30.5,
    customer: {
      name: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit',
    },
    createdAt: 1555016400000,
    status: 'approval pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'approved'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'rejected'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'approval pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'approved'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'approved'
  }
];

function Crd() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-around" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TOTAL PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $23k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "primary.main",
                height: 56,
                width: 56,
              }}
            >
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2}  sx={{ justifyContent: "space-around" }}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <InfoCard title="No. of thesis" value="val 1" avatarbgcolor="error.main"/>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Thesis approved" value="val 2" avatarbgcolor="success.light"/>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="No. of co authors" value="val 3" avatarbgcolor="primary.main"/>
          </Grid>
          {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="card 1" value="val 1" avatarbgcolor="warning.light"/>
          </Grid> */}
          <Grid item lg={12} md={12} xl={9} xs={12}>
            <Submissions data={data} title="Recent Submissions"/>
          </Grid>
          {/* <Grid item lg={4} md={6} xl={3} xs={12}>
            <InfoCard title="card 1" value="val 1" />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Crd />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Crd />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}