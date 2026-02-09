import { createBrowserRouter } from 'react-router-dom';
import TaskDashboard from './pages/TaskDashboard';
import CreateTask from './pages/CreateTask';

import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <TaskDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/create',
    element: (
      <ProtectedRoute>
        <CreateTask />
      </ProtectedRoute>
    )
  }
]);

export default router;
