import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, ListItem} from "@mui/material";
import {Link} from "react-router-dom"

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useLocation();
  const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Box sx={{ "&>a":{textDecoration: "none" }, width: "100%"}}>
        <Link to={href}>
          <Button
            component="a"
            startIcon={icon}
            disableRipple
            sx={{
              backgroundColor: active && "rgba(255,255,255, 0.08)",
              borderRadius: 1,
              color: active ? "secondary.main" : "neutral.300",
              fontWeight: active && "fontWeightBold",
              justifyContent: "flex-start",
              px: 3,
              textAlign: "left",
              textTransform: "none",
              width: "100%",
              "& .MuiButton-startIcon": {
                color: active ? "secondary.main" : "neutral.400",
              },
              "&:hover": {
                backgroundColor: "rgba(255,255,255, 0.08)",
              },
            }}
          >
            <Box sx={{ flexGrow: 1, textDecoration: "none" }}>{title}</Box>
          </Button>
        </Link>
      </Box>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
