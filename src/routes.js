import { Navigate } from 'react-router-dom';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './pages/DashboardLayout';
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';
import EditClass from './pages/EditClass';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ClassControl from './pages/ClassControl';
import AddClass from './pages/AddClass';

const routes = [
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [
      { path: 'student', element: <Student /> },
      { path: 'teacher', element: <Teacher /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'additem', element: <AddAccount />},
      { path: 'class', element: <ClassControl/>},
      { path: 'addclass', element: <AddClass />},
      { path: 'edititem', element: <EditAccount />},
      { path: 'editclass', element: <EditClass />},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      {path: '*', element: <Navigate to="/404" />}
    ]
  }
];

export default routes;