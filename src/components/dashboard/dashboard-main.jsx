import React from "react";
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
import {RecentSubmissions} from "./Table";

function Crd() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
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
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <InfoCard title="card 1" value="val 1" avatarbgcolor="error.main"/>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="card 1" value="val 1" avatarbgcolor="success.light"/>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="card 1" value="val 1" avatarbgcolor="primary.main"/>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="card 1" value="val 1" avatarbgcolor="warning.light"/>
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <RecentSubmissions />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <InfoCard title="card 1" value="val 1" />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Crd />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Crd />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}