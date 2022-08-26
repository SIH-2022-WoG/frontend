import React from "react";
import { Grid, Box} from "@mui/material";
const Footer = () => {
  return (
    <Grid sx={{mt:4}}>
       <Box display="flex" justifyContent="flex-end" sx={{mr:3}}>
        © 2020 Copyright: <h4>WrathOfGod - SIH 2022</h4>
       </Box>
    </Grid>
  );
};

export default Footer;
