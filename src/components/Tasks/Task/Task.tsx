import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";

interface TaskProps {
  task: { name: string; description: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
  return (
    <Card sx={{ minWidth: 350, backgroundColor: "primary.main" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            color="success"
            checked={task.completed}
            onChange={onToggle}
          />
          <Typography sx={{ fontSize: 20 }} color="secondary" gutterBottom>
            {task.name}
          </Typography>
        </Box>
        <Typography sx={{ m: 1 }} variant="body1">
          {task.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
        <Button color="error" size="small" onClick={onDelete}>
          delete
        </Button>
      </Box>
    </Card>
  );
};

export default Task;

{
  /* <Card sx={{ display: "flex", justifyItems: "center", m: 5 }}>
<Box sx={{ display: "flex", justifyContent: "space-between" }}>
  <CardContent>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox checked={completed} onChange={onToggleComplete} />
        }
        label={name}
      />
    </FormGroup>
    <Typography sx={{ mt: 4 }}>{description}</Typography>
  </CardContent>
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      mt: 2,
    }}
  >
    <Button>delete</Button>
  </Box>
</Box>
</Card> */
}
