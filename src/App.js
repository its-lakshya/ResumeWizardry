import "./App.css";
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
import FormAddSection from "./components/formSections/FormAddSection";
import { Provider } from "react-redux";
import Store from "./store/Store";
import LinkForm from './components/formSections/LinksForm'
import CertificationForm from "./components/formSections/CertificationForm";
import LanguagesForm from "./components/formSections/LanguagesForm";
import AdditionalInfoForm from "./components/formSections/AdditionalInfoForm";
import AccomplishmentForm from "./components/formSections/AccomplishmentForm";
import Template1 from "./templates/Template1";

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
        path: "template",
        element: <Template1 />,
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
                path: "finalize",
                // element: <FormAddSection />,
                children:[
                  {
                    path:"",
                    element:<FormAddSection/> 
                  },
                  {
                    path:"add-links",
                    element:<LinkForm/> 
                  },
                  {
                    path:"add-crtf",
                    element:<CertificationForm/> 
                  },
                  {
                    path:"add-lang",
                    element:<LanguagesForm/> 
                  },
                  {
                    path:"add-accomp",
                    element:<AccomplishmentForm/> 
                  },
                  {
                    path:"add-addInfo",
                    element:<AdditionalInfoForm/> 
                  },
                ]
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
