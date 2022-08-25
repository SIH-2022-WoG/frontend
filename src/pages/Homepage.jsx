import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Toolbar, Box } from '@mui/material';


   
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
            Projects
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
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
         
          >
            Our Objectives
          </Typography>
          <Grid container align="center" >
            <Grid item lg={3}>
              <Card elevation={5} >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                 
                  >
                    #1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  
                  >
                    To encourage Research and Development and let them explore the
                    vast field of their interst.
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
                    #2
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                 
                  >
                    To let students accross the country gain rich experience and
                    exposure in research field.
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
                    #3
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                     
                  >
                    To enhance your Management Skills and interpretation of
                    results accurately.
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
                    #4
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    
                  >
                    Gives you an exposure and an oppurtunity to understand the
                    research process, to integrate theory into practice.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div>
          <div >
            <Grid container direction="row" alignItems="flex-start">
              <Grid
                align="center"
                item
                xs={12}
                md={6}
              
              >
                <CardContent>
                  <Typography component="h2" variant="h4" gutterBottom>
                    Director&apos;s Message
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
                </CardContent>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
  );
}

export default Homepage