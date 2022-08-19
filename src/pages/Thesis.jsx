import React from "react";
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
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function Thesis() {
  return (
    <Container
      sx={{
        py: 8,
      }}
    >
      {/* <Typography sx={{ mb: 3 }} variant="h4">
        Thesis
      </Typography> */}
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xl={8} lg={8} sm={8} xs={12}>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
              <Typography variant="body2" sx={{ mt: 4, color: "gray" }}>
                19 August 2022
              </Typography>
              <Stack spacing={2} direction="row" alignItems="baseline" mt={1}>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Guide:
                </Typography>
                <Chip
                  avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>JS</Avatar>}
                  label="Dr. John Smith"
                />
              </Stack>
              <Stack spacing={2} direction="row" alignItems="baseline" mt={1}>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Author(s):
                </Typography>
                <Chip
                  avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>}
                  label="Avatar"
                />
                <Chip
                  avatar={<Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>}
                  label="Avatar"
                />
              </Stack>
              <Typography variant="body1" sx={{ fontWeight: "bold" }} mt={5}>
                Description:
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
              </Typography>
            </Grid>
            <Grid item xl={4} lg={4} sm={4} xs={12}>
              <Card sx={{ textAlign: "center" }} elevation="16">
                <CardContent>
                  <Box p={3}>
                    <PictureAsPdfIcon sx={{ fontSize: "48px" }} color="error" />
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontWeight: "bold" }}
                      color="success.main"
                    >
                      PDF available
                    </Typography>
                  </Box>
                  <Button variant="contained" endIcon={<DownloadIcon />}>
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
