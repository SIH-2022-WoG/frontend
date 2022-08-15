import React from "react";
import { Card, CardContent, Grid, Typography, Avatar } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function InfoCard(props) {
  return (
    <Card  {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item align="left">
            <Typography color="textSecondary" gutterBottom variant="overline">
              {props.title}
            </Typography>
            <Typography color="textPrimary" variant="h4" fontWeight="bold">
              {props.value}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: `${props.avatarbgcolor||"primary.main"}`,
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
