import { Box, Typography } from "@mui/material";
import TaskList from "../TaskList/TaskList";

interface CompletedTasksProps {
  tasks: { name: string; description: string; completed: boolean }[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const CompletedTasks: React.FC<CompletedTasksProps> = ({
  tasks,
  onDelete,
  onToggle,
}) => {
  return (
    <Box>
      {tasks.length === 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
            }}
          >
            No completed tasks
          </Typography>
        </Box>
      ) : (
        <TaskList
          tasks={tasks.filter((task) => task.completed)}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )}
    </Box>
  );
};

export default CompletedTasks;
