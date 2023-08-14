import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import BuildResume from "./pages/BuildResume";
import BuildResumeStartPage from "./pages/BuildResumeStartPage";
import ChooseTemplate from "./pages/ChooseTemplate";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import FormContactSection from "./components/formSections/FormContactSection";
import FormEducationSection from "./components/formSections/FormEducationSection";

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
        children: [
          {
            path: "",
            element: <BuildResumeStartPage />,
          },
          {
            path: "choose-template",
            element: <ChooseTemplate />,
          },
          {
            path: "form",
            element: <FormPage />,
            children: [
              {
                path: "contact",
                element: <FormContactSection />,
              },
              {
                path: "education",
                element: <FormEducationSection />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
