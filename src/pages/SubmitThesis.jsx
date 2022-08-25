import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Input,
  Button,
  CardActions
} from "@mui/material";

export default function SubmitThesis() {
  return (
    <Container
      sx={{
        py: 8,
      }}
    >
      <Typography sx={{ my: 3 }} variant="h4">
        Submit thesis
      </Typography>
      <Card>
          <form>
        <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Title"
                  name="title"
                  // onChange={handleChange}
                  required
                  // value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  multiline
                  label="Description"
                  name="description"
                  // onChange={handleChange}
                  required
                  // value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Department"
                  name="dept"
                  // onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  // value={values.state}
                  variant="outlined"
                >
                  {/* {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Institute"
                  name="institute"
                  // onChange={handleChange}
                  type="text"
                  // value={values.institute}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Guide"
                  name="guide"
                  // onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  // value={values.state}
                  variant="outlined"
                >
                  {/* {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Input
                  fullWidth
                  label="CGPA"
                  name="cgpa"
                  // onChange={handleChange}
                  type="file"
                  // value={values.cgpa}
                  variant="outlined"
                />
              </Grid>
            </Grid>
        </CardContent>
        <CardActions sx={{justifyContent: "flex-end", p: 2}}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </CardActions>
          </form>
      </Card>
    </Container>
  );
}
