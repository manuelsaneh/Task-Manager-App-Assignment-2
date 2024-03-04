import { AppBar, Toolbar, Typography } from "@mui/material";
import { theme } from "../../theme/theme";

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ alignItems: "center", bgcolor: theme.palette.secondary.main }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
          }}
        >
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
