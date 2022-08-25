import React, { useState } from "react";
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
  const [values, setValues] = useState({
    title: "",
    desc: "",
    dept: "",
    guide: {},
    file: "",
  });

  const guide = {
    key: "62fbbff369879cc5166cf5ae" ,
    name: "Monika Gupta"
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

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
                  onChange={handleChange}
                  required
                  value={values.title}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  multiline
                  label="Description"
                  name="desc"
                  onChange={handleChange}
                  required
                  value={values.desc}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Department"
                  name="dept"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.dept}
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
                  label="Guide"
                  name="guide"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.guide}
                  variant="outlined"
                >
                  {/* {states.map((option) => ( */}
                  <option key={guide.key} value={guide}>
                    {guide.name}
                  </option>
                {/* ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Input
                  fullWidth
                  label="File"
                  name="file"
                  onChange={handleChange}
                  type="file"
                  value={values.file}
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
