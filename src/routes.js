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
import RollCall from './pages/RollCall';
import DBLayout from './pages/roleTeacher/DBLayout';
import Class from './pages/roleTeacher/Class';
import Student_T from './pages/roleTeacher/Student_T';
import Teacher_T from './pages/roleTeacher/Teacher_T';

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
      { path: 'edititem/:id', element: <EditAccount />},
      { path: 'editclass/:classId', element: <RollCall />},
      //{ path: 'account', element: <EditClass />},
      { path: '*', element: <Navigate to="/errorPage" /> }
    ]
  },
  {
    path: '/teacher',
    element: <DBLayout />,
    children: [
      { path: 'liststudent/:id', element: <Student_T /> },
      { path: 'listteacher/:id', element: <Teacher_T /> },
      { path: 'listclass/:id', element: <Class /> }
    ]
  },
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '*', element: <Navigate to="/errorPage" /> }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      {path: '*', element: <Navigate to="/errorPage" />}
    ]
  },
  {
    path: '/errorPage',
    element: <NotFound />
  }
];

export default routes;