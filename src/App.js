import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import BuildResume from "./pages/BuildResume";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/build-resume",
        element: <BuildResume />,
      },
      // {
      //   path: "/",
      //   element: <Home />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
