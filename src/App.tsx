import TasksPage from "./features/TasksPage/TasksPage";
import { Box } from "@mui/material";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TasksPage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
