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
  CardActions,
} from "@mui/material";
import { API } from "../backend";
import axios from "axios";

export default function SubmitThesis() {
  const [values, setValues] = useState({
    title: "dhdhergerh",
    abstract: "bflbwflw fwh fow  hfwo",
    branch: "Electrical",
    guides: [{
      profId: "62fbbce3920c0bc145224eda" ,
      name: "Monika Gupta"
    }],
    file: "",
  });

  // const guide = [{
  //   profId: "62fbbff369879cc5166cf5ae" ,
  //   name: "Monika Gupta"
  // }]

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangefile = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let {title,abstract,branch,guides} = values;
    // console.log(values)
    // console.log('uploading' , {title,abstract,branch,guides:guides})
    // console.log(localStorage.getItem("jwt").token)
    return fetch(`${API}student/protected/createThesis`, {
      // mode: 'cors',
      method: "POST",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDdhNjI0NTA2ZWRjODg5MDA3YmExNiIsImlhdCI6MTY2MTQ3NDgzNywiZXhwIjoxNjYxNTE4MDM3fQ.XpUDFYKO6yeyfAVX3tpHUPzVf6jnm4fWwkY2vYtJwps',
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({title,abstract,branch,guides}),
    })
    .then((response) => {
      let url = "https://mediahandler.herokuapp.com/fileupload/cloud/multilang"
      const formData = new FormData();
    formData.append('file', values.file);
    formData.append('fileName', values.file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(url, formData, config)
        .then((response) => {
          // console.log(response)
          fetch(`https://plagiarismchecker22.herokuapp.com/plagiarism/create`, {
            // mode: 'cors',
            method: "POST",
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDdhNjI0NTA2ZWRjODg5MDA3YmExNiIsImlhdCI6MTY2MTQ3NDgzNywiZXhwIjoxNjYxNTE4MDM3fQ.XpUDFYKO6yeyfAVX3tpHUPzVf6jnm4fWwkY2vYtJwps',
              Accept: "application/json",
              "Content-Type": "application/json",
              // 'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({fileUrl: response.data.data.textRes.url, thesisId: "text", title: "text"}),
          }).then((response)=>console.log(response))
      })
    })
      .catch((err) => console.log(err));
  }

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
        <form onSubmit={handleSubmit}>
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
                  label="Abstract"
                  name="abstract"
                  onChange={handleChange}
                  required
                  value={values.abstract}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Department"
                  name="branch"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.branch}
                  variant="outlined"
                >
                  {/* {states.map((option) => ( */}
                  <option key="electrical" value="Electrical">
                    Electrical
                  </option>
                {/* ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Guide"
                  name="guides"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.guides[0]}
                  variant="outlined"
                >
                  {/* {states.map((option) => ( */}
                  <option key={values.guides[0].key} value={values.guides[0]}>
                    {values.guides[0].name}
                  </option>
                {/* ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <Input
                  fullWidth
                  label="File"
                  name="file"
                  onChange={handleChangefile}
                  type="file"
                  // value={values.file}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
            <Button type="submit" variant="contained" >
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
}
