import { Box } from "@mui/material";
import CreateTaskCard from "../../components/Tasks/CreateTaskCard/CreateTaskCard";
import NavBar from "../../components/NavBar/NavBar";
import Tabs from "../../components/Tabs/Tabs";
import { useEffect, useState } from "react";
import ActiveTasks from "../../components/Tasks/ActiveTasks/ActiveTasks";
import CompletedTasks from "../../components/Tasks/CompletedTasks/CompletedTasks";
import Loader from "../../components/Loader/Loader";

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<
    { name: string; description: string; completed: boolean }[]
  >([]);
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // Adds a new task to the list
  const handleAddTask = (newTask: { name: string; description: string }) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
  };

  // handles checked tasks if it's complete
  const handleToggleTask = async (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  // Deletes a task from the list
  const handleDeleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Handles toggle between Tabs
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // To simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    };

    fetchData();
  }, [tabValue]);

  return (
    <Box>
      <NavBar />
      <Tabs value={tabValue} onChange={handleTabChange} />
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          {tabValue === 0 && (
            <Box
              sx={{
                display: tabValue !== 0 ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CreateTaskCard onAddTask={handleAddTask} />
              <Box sx={{ mt: 3, width: "100%" }}>
                <ActiveTasks
                  tasks={tasks}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              </Box>
            </Box>
          )}
          {tabValue === 1 && (
            <Box
              sx={{
                display: tabValue !== 1 ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CompletedTasks
                tasks={tasks}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default TasksPage;
