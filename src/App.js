import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <Navbar />
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
