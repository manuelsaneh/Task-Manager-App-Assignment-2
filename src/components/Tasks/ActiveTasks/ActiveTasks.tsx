import { Box, Typography } from "@mui/material";
import TaskList from "../TaskList/TaskList";

interface ActiveTasksProps {
  tasks: { name: string; description: string; completed: boolean }[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const ActiveTasks: React.FC<ActiveTasksProps> = ({
  tasks,
  onDelete,
  onToggle,
}) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {tasks.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
          }}
        >
          No active tasks
        </Typography>
      ) : (
        <TaskList
          tasks={tasks.filter((task) => !task.completed)}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )}
    </Box>
  );
};

export default ActiveTasks;
