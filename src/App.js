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
import FormExperienceSection from "./components/formSections/FormExperienceSection";
import FormSkillSection from "./components/formSections/FormSkillSection";
import FormSummarySection from "./components/formSections/FormSummarySection";
import FormAddSection from "./components/formSections/FromAddSection";
import { Provider } from "react-redux";
import Store from "./store/Store";

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
              {
                path: "experience",
                element: <FormExperienceSection />,
              },
              {
                path: "skills",
                element: <FormSkillSection />,
              },
              {
                path: "summary",
                element: <FormSummarySection />,
              },
              {
                path: "add-section",
                element: <FormAddSection />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
