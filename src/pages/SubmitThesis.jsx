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
  // const [status, setStatus] = useState(-1);
  const [txtUrl, setTextUrl] = useState("");
  // const [txtFileId, setTxtFileId] = useState("");

  const [values, setValues] = useState({
    title: "dhdhergerh",
    abstract: "bflbwflw fwh fow  hfwo",
    branch: "Electrical",
    guides: [
      {
        profId: "62fbbce3920c0bc145224eda",
        name: "Monika Gupta",
      },
    ],
    file: "",
  });

  // function

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
    let { title, abstract, branch, guides } = values;
    // console.log(values)
    // console.log('uploading' , {title,abstract,branch,guides:guides})
    // console.log(localStorage.getItem("jwt").token)
    // .then((response) => {
    //   console.log(response);
    let url = "https://mediahandler.herokuapp.com/fileupload/cloud/multilang";
    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("fileName", values.file.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        setTextUrl(response.data.data.textRes.secure_url);
        console.log(response.data.data.textRes.secure_url)
        axios
          .post(
            `${API}student/protected/createThesis`,
            JSON.stringify({
              title,
              abstract,
              branch,
              guides,
              fulltext: {
                mediaId: response.data.data.textRes.public_id,
                cloudUrl: response.data.data.textRes.secure_url,
              },
              thesisMedia: {
                mediaId: response.data.data.pdfRes.public_id,
                cloudUrl: response.data.data.pdfRes.secure_url,
              },
            }),
            // mode: 'cors',
            {headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}`,
              Accept: "application/json",
              "Content-Type": "application/json",
              // 'Access-Control-Allow-Origin':'*'
            }}
          )
          .then((response) => {
            console.log("txturl: ", txtUrl);
            console.log(response)

            axios
              .post(
                `https://mainserver22.herokuapp.com/thesis/evaluate?id=${response.data.data._id}&lang=0`,
                { "fileUrl": txtUrl },
                {headers: {
                  Accept: "application/json",
                  "Content-Type": "text/html; charset=UTF-8",
                  // // 'Access-Control-Allow-Origin':'*'
                }}
              )
              .then((response) => {
                console.log(response);
              }).catch((err) => console.log(err));
          }).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
                  <option key="medicine" value="Medicine">
                    Medicine
                  </option>
                  <option key="IT" value="IT">
                    IT
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
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
}
