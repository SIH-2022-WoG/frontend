import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Toolbar, Box, Container } from '@mui/material';
import { v4 as uuid } from "uuid";
import { Submissions } from "../components/dashboard/Table";

const data = [
  {
    id: uuid(),
    ref: "Dr. John Smith",
    amount: 30.5,
    customer: {
      name: "Lorem Ipsum Dolor sit amet, consectetur adipiscing elit",
    },
    createdAt: 1555016400000,
    status: "approval pending",
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "approved",
  }
]

   
const Homepage = () => {
    return (
      <div>
         
          <Toolbar/>
          <Grid container spacing={2} sx={{ p:5}}>
           <Grid item xs={6}>
           <Box textAlign='center' sx={{ mt: 8, width: 800 }}>
          <Typography 
              sx = {{
                 mt: 4
              }}
              variant="h1"
               >
              Research Portal
          </Typography>
          <Typography 
           
            sx={{
              mt: 4,
              mb: 4
            }} >
            "Research is formalized curiosity. It is poking and prying with a
            purpose."
          </Typography>
          <Button
            size="large"
            
            component={Link}
            to="/projects"
            color="primary"
            variant="contained"
          >
           SIGN UP
          </Button>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box
        component="img"
        sx={{
          // height: 233,
          // width: 350,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src= "https://researchportal-dd91a.web.app/static/media/rp_homepage.97202920.svg"
      />
        </Grid>
        </Grid>
        {/* objectives */}
        <div>
          {/* <Typography
            gutterBottom
            variant="h2"
            sx={{ ml: 4}}  
          >
          Our Objectives
          </Typography> */}
          <Grid container align="center" sx={{p:4}} spacing={10} >
            <Grid item lg={3}>
              <Card elevation={5} >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                 
                  >
                    Val1
                  </Typography>
                  <Typography
                    variant="h4"
                    color="textSecondary"
                    component="p"
                    align="center"
                  
                  >
                   Theses
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card elevation={5}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                 
                  >
                    Val2
                  </Typography>
                  <Typography
                    align="center"
                    variant="h4"
                    color="textSecondary"
                    component="p"
                 
                  >
                   Researchers
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card elevation={5}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                   
                  >
                    Val 3
                  </Typography>
                  <Typography
                    align="center"
                    variant="h4"
                    color="textSecondary"
                    component="p"
                     
                  >
                    Colleges
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card elevation={5} >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    
                  >
                    Val 4
                  </Typography>
                  <Typography
                    align="center"
                    variant="h4"
                    color="textSecondary"
                    component="p"
                    
                  >
                    Guides
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div>
          <div >
            <Grid container direction="row" alignItems="flex-start"  
             sx={{
             
              
              border: "1px solid red"}}>
              <Grid
                align="center"
                item
                xs={12}
                md={6}
              
              >
             <Container
                    sx={{
                      width: 2000
                   }}
              >
             {/* <Typography sx={{ mb: 3 }} variant="h4">
                 Our top colleges
             </Typography> */}
             <Submissions data={data} title="Our top ten colleges" viewAll={false} />
             </Container>
                {/* <CardContent>
                  <Typography component="h2" variant="h4" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    laudantium tempora corrupti provident eaque eius reprehenderit
                    praesentium quasi quod aliquid? ipsum dolor sit amet
                    adipisicing elit. laudantium tempora corrupti provident eaque
                    eius reprehenderit praesentium quasi quod aliquid? ipsum dolor
                    sit amet consectetur adipisicing elit. laudantium tempora
                    corrupti provident eaque eius reprehenderit praesentium quasi
                    quod aliquid?
                  </Typography>
                </CardContent> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
  );
}

export default Homepage