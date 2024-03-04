# Task Manager App

This is a simple Task Manager App built with React, TypeScript, and Material-UI. The app allows users to create and organize their tasks into active and completed categories.

## Features

- **Create Task:** Add new tasks with a name and description.
- **Toggle Task:** Mark tasks as completed or active with a checkbox.
- **Delete Task:** Remove tasks from the list.
- **Tabs:** Switch between Active and Completed tasks.
- **Loading Indicator:** Displays a loading spinner when switching between tabs.
- **No Tasks Message:** Inform users when there are no tasks available.

## Project Structure

- **`Task.tsx`:** Component for individual tasks with a checkbox and delete button.
- **`TaskList.tsx`:** Displays a list of tasks using the `Task` component.
- **`CreateTaskCard.tsx`:** Component for creating and adding new tasks.
- **`Tabs.tsx`:** Component for rendering tabs (ActiveTasks, CompletedTasks) in the app.
- **`ActiveTasks.tsx` and `CompletedTasks.tsx`:** Components for displaying Active and Completed tasks, respectively.
- **`TasksPage.tsx`:** This is the main component for the application, handling state and logic.
- **`App.tsx`:** Entry point of the application, rendering the `TasksPage` component.


## Difficulties Faced

During the development of this app, I encountered a few challenges:

1. **Handling:** I encountered some challenges with toggling task completion.

2. **Styling:** Faced some difficulties with Mui as i'm not used to using this library but i was able to overcome those difficulties and came up with a responsive and clean design for this App.

3. **Structure:** I tried to organize the project into several components to try and enhance the readability and maintainability of the code. Hope i did a good job.




