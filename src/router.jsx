import { createHashRouter } from "react-router-dom";
import TaskDashboard from "./pages/TaskDashboard";
import CreateTask from "./pages/CreateTask";

const router = createHashRouter([
  {
    path: "/",
    element: <TaskDashboard />
  },
  {
    path: "/create",
    element: <CreateTask />
  }
]);

export default router;
