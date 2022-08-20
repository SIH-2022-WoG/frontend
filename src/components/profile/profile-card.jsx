import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src=""
          sx={{
            height: 64,
            mb: 2,
            width: 64,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
            Katarina Smith
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Department of Computer Science and Engineering
        </Typography>
        <Typography color="textSecondary" variant="body2">
          National Institute of Technology Durgapur
        </Typography>
      </Box>
    </CardContent>

    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
