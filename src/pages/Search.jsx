import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Card,
  CardContent,
  Stack,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import SearchThesisTable from "../components/search/SearchThesisTable";
import SearchPeopleTable from "../components/search/SearchPeopleTable";
import SearchCollegeTable from "../components/search/SearchCollegeTable";

const SearchComp = styled("div")(({ theme }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Search() {
  const [List, setList] = useState([]);
  const [filter, setFilter] = useState(10);
  const [sort, setSort] = useState(10);

  function match(text){
    axios.get(`https://plagiarismchecker22.herokuapp.com/plagiarism/search/partial?text=${text}`)
    .then((response) => {
      // if()
      // response.percentage
    })
  }

  return (
    <Container
      sx={{
        py: 8,
      }}
      maxWidth={"md"}
    >
      <Typography sx={{ my: 3 }} variant="h4">
        Search
      </Typography>
      <SearchComp>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchComp>
      <Box mt={1} maxWidth={"sm"} mx={"auto"}>
        <Card>
          <CardContent sx={{ p: 1 }}>
            <Grid container spacing={3} sx={{ px: 5 }}>
              <Grid item sm={6} xs={12}>
                <Typography variant="h6">Filter</Typography>
                <Select
                  fullWidth
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={10}
                  value={filter}
                  // label="Age"
                  onChange={(e) => setFilter(e.target.value)}
                  sx={{ mt: 1 }}
                >
                  <MenuItem value={10}>Thesis Title</MenuItem>
                  <MenuItem value={20}>Thesis Keyword/Phrase</MenuItem>
                  <MenuItem value={30}>College</MenuItem>
                  <MenuItem value={40}>Researcher</MenuItem>
                  <MenuItem value={50}>Guide</MenuItem>
                </Select>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography variant="h6">Sort By</Typography>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  defaultValue={10}
                  value={sort}
                  // label="Age"
                  onChange={(e) => setSort(e.target.value)}
                  sx={{ mt: 1 }}
                >
                  <MenuItem value={10}>Relevance</MenuItem>
                  <MenuItem value={20}>Date</MenuItem>
                  <MenuItem value={30}>Alphabetical</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Grid item xs={12} mt={4}>
        {(filter === 10 || filter === 20) && <SearchThesisTable />}
        {(filter === 40 || filter === 50) && <SearchPeopleTable />}
        {filter === 30 && <SearchCollegeTable />}
      </Grid>
    </Container>
  );
}

// https://plagiarismchecker22.herokuapp.com/plagiarism/search?text=abcd