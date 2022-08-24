import React from "react";
import {
  Box,
  Card,
  Container,
  Stack,
  CardMedia,
  Typography,
  Divider,
  Grid,
  CardContent,
  Chip,
  CardHeader,
  Avatar,
} from "@mui/material";
import { theme } from "../theme/theme";
import {grey} from '@mui/material/colors';
import { deepOrange, deepPurple } from "@mui/material/colors";


export default function ViewProfile() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Card elevation={16}>
          <Box
            sx={{
              p: 4,
              [theme.breakpoints.down("md")]: {
                p: 1,
              },
            }}
          >
            <Stack
              spacing={4}
              direction="row"
              alignItems="center"
              sx={{
                [theme.breakpoints.down("md")]: {
                  gap: 1,
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 100, borderRadius: 10 }}
                image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1661098662~exp=1661099262~hmac=a1b3a542c2607c8769ec4ac50f21eafcd2730976d8ad9ba6c200c5fb0d162c02"
                alt="Profile Image"
              />
              <Box>
                <Typography variant="h5">John Smith</Typography>
                <Typography variant="body2" mt={1}>
                  johnsmith@example.com
                </Typography>
                <Typography variant="body2">
                  National Institute of Technology Durgapur
                </Typography>
                <Typography variant="body2">
                  Department of Computer Science and Engineering
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider />

          <Box
            sx={{
              p: 4,
              [theme.breakpoints.down("md")]: {
                p: 1,
              },
            }}
          >
            <Box>
              <Stack spacing={1} direction="row" alignItems="center" my={2}>
                <Typography variant="h5">About</Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Stack>
            </Box>
            <Card sx={{ textAlign: "center" }} elevation={6}>
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
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Publications
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
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Plagiarism
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card elevation={6} sx={{ mt: 2 }}>
              <CardHeader title="Interests" />
              <Divider />
              <Box p={2}>
                <Stack gap={1} direction="row" flexWrap="wrap">
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    label="Chip Outlined"
                    variant="outlined"
                    color="primary"
                  />
                </Stack>
              </Box>
            </Card>

            <Box mt={4}>
              <Stack spacing={1} direction="row" alignItems="center" my={2}>
                <Typography variant="h5">Publications</Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Stack>
            </Box>

            <Card elevation={8}>
              <CardContent>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
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
              </CardContent>
            </Card>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
