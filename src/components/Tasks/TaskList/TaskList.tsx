import React from "react";
import Task from "../Task/Task";
import { Box } from "@mui/material";

interface TaskListProps {
  tasks: { name: string; description: string; completed: boolean }[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        m: 5,
        gap: 2,
      }}
    >
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </Box>
  );
};

export default TaskList;
