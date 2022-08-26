import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/profile/profile-card";
import { AccountProfileDetails } from "../components/profile/profile-details";
import {SeverityPill} from "../components/dashboard/Severitypill"
import { useEffect, useState } from "react";

const Profile = () => {
/*"name": "Ben stokes",
    "user": "62f3d80a0eb1b1bad57207db",
    "numThesis": 0,
    "branch": "Computer Science",
    "interests": [],
    "createdAt": "2022-08-10T16:08:42.758Z",
    "updatedAt": "2022-08-10T16:16:11.772Z",
    "__v": 0,
    "grade": "8.97",
    "currCollege": {
      "name": "Oxford",
      "collegeId": "62f3c63c4349a33fa1d */

      // const [stud, setStud] = useState();
    
  // useEffect(()=>{
  //   fetch(`https://mainserver22.herokuapp.com/student/public/viewProfile?id=${JSON.parse(localStorage.getItem('_id'))}`, {method:"GET", "headers":{'Content-Type': 'application/json'}})
  //   .then((response)=>{
  //     setStud(response.data);
  //   })
  // }, [])

  return(
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
  )
};

export default Profile;
