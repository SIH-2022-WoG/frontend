import React, {useEffect, useState} from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Button,
  Box,
  Chip,
  Avatar,
  Stack,
  CardActions
} from "@mui/material";
import {grey} from '@mui/material/colors';
import { Link } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PreviewIcon from '@mui/icons-material/Preview';
import DownloadIcon from "@mui/icons-material/Download";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { SeverityPill } from "../components/dashboard/Severitypill";

export default function Thesis() {
  
  const [data, setdata] = useState();

  useEffect(()=>{
      fetch(`https://mainserver22.herokuapp.com/thesis/viewOne?id=${localStorage.getItem('thesis')}`, 
      {
      method:"GET",
      headers : {
        "Content-Type" : "application/json",
      }
    })
      .then((response)=>{
        setdata(response.data);
        console.log(data)
      })
    }, [])

  return (
    <Container
      sx={{
        py: 8,
      }}
    >
    {console.log(data)}
      {/* <Typography sx={{ mb: 3 }} variant="h4">
        Thesis
      </Typography> */}
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xl={8} lg={8} sm={8} xs={12}>
              <SeverityPill color="success">Approved</SeverityPill>
              <Typography variant="h5" mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
              <Box sx={{ color: grey[600] }}>
                <Typography variant="body2" sx={{ mt: 4 }}>
                  19 August 2022
                </Typography>
                <Typography variant="body2">
                  Computer Science and Engineering
                </Typography>
                <Typography variant="body2">
                  National Institute of Technology Durgapur
                </Typography>
                <Stack spacing={2} direction="row" alignItems="baseline" mt={1}>
                  <Typography variant="body2">Guide(s):</Typography>
                  <Chip
                    avatar={
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>JS</Avatar>
                    }
                    label="Dr. John Smith"
                  />
                </Stack>
                <Stack spacing={2} direction="row" alignItems="baseline" mt={1}>
                  <Typography variant="body2">Author(s):</Typography>
                  <Chip
                    avatar={
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
                    }
                    label="Avatar"
                  />
                  <Chip
                    avatar={
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
                    }
                    label="Avatar"
                  />
                </Stack>
              </Box>
              {/* If the user is logged in*/}
              {/* <Box
                sx={{
                  mt: 4,
                  "&>a": { textDecoration: "none" },
                }}
              >
                <Link to={"/"}>
                  <Button
                    color="primary"
                    // endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="outlined"
                  >
                    Detailed Report
                  </Button>
                </Link>
              </Box> */}
              <Typography variant="body1" sx={{ fontWeight: "bold" }} mt={5}>
                Description:
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim adipiscing Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim adipiscing Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim adipiscing
              </Typography>
            </Grid>
            <Grid item xl={4} lg={4} sm={4} xs={12}>
              <Stack spacing={2} direction="column">
                <Card sx={{ textAlign: "center" }} elevation={16}>
                  <CardContent>
                    <Box p={3}>
                      <PictureAsPdfIcon
                        sx={{ fontSize: "48px" }}
                        color="error"
                      />
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, fontWeight: "bold" }}
                        color="success.main"
                      >
                        PDF available
                      </Typography>
                    </Box>
                    <CardActions sx={{justifyContent: "center"}}>
                      <Button variant="outlined" endIcon={<PreviewIcon />}>
                        View
                      </Button>
                      <Button variant="contained" endIcon={<DownloadIcon />}>
                        Download
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
                <Card sx={{ textAlign: "center" }} elevation={16}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xl={6} lg={6} sm={6} xs={12}>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold" }}
                          color="primary.main"
                        >
                          8
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Pages
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} sm={6} xs={12}>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold" }}
                          color="primary.main"
                        >
                          4%
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Plagiarism
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
