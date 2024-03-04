import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";

interface CreateTaskProps {
  onAddTask: (task: { name: string; description: string }) => void;
}

const CreateTaskCard: React.FC<CreateTaskProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<{ name: string; description: string }>(
    {
      name: "",
      description: "",
    }
  );

  // To check if the task name is not empty before adding the task
  const handleAddTask = () => {
    if (newTask.name.trim() !== "") {
      onAddTask(newTask);
      setNewTask({ name: "", description: "" });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "350px",
        maxHeight: "300px",
        mt: 4,
        backgroundColor: "primary.main",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="secondary" gutterBottom>
          Create a Task
        </Typography>
        <TextField
          id="standard-basic"
          label="Task Name"
          variant="standard"
          color="secondary"
          fullWidth
          value={newTask.name}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          id="standard-multiline-static"
          label="Task Description"
          multiline
          rows={3}
          fullWidth
          variant="standard"
          color="secondary"
          sx={{ mt: 3 }}
          value={newTask.description}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleAddTask}
            disabled={!newTask.name.trim()}
          >
            Create
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreateTaskCard;
