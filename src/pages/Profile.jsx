import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/profile/profile-card";
import { AccountProfileDetails } from "../components/profile/profile-details";
import {SeverityPill} from "../components/dashboard/Severitypill"

const Profile = () => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8,
    }}
  >
    <Container maxWidth="lg">
      <Typography sx={{ mb: 3 }} variant="h4">
        Profile
        <SeverityPill color="warning" sx={{ml:2}}>In review</SeverityPill>
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item md={8} xs={12}>
          <AccountProfileDetails />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Profile;
