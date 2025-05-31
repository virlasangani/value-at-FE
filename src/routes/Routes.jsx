import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Jobs from "../pages/Jobs";
import Dashboard from "../pages/dashboard";
import Candidates from '../pages/candidate'
import ShortListed from "../pages/candidate/shortListed";
import RegisterdJobs from "../pages/candidate/registerd";
import Notification from "../pages/notification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: '/candidate',
        element: <Candidates/>,
        children: [
          {
            path: "registerd",
            element: <RegisterdJobs />,
          },
          {
            path: "shortlisted-candidate",
            element: <ShortListed />,
          },
        ],
      }
    ],
  },
]);
