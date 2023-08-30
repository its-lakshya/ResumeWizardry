import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useRouter = (data) => {

  const [route, setRoute] = useState();

  const routesInfo = useSelector((store) => store.sectionSelectionDetails);

  const web = routesInfo.website;

  const crtf = routesInfo.certifications;

  const lang = routesInfo.languages;

  const accomp = routesInfo.accomplishments;

  const addInfo = routesInfo.additionalInformation;

  useEffect(() => {
    if (data[0]==='w' && web === true) {
      setRoute("/build-resume/form/finalize/add-links");
    } else if (data[1]==='c' && crtf === true) {
      setRoute("/build-resume/form/finalize/add-crtf");
    } else if (data[2]==='l' && lang === true) {
      setRoute("/build-resume/form/finalize/add-lang");
    } else if (data[3]==='ac' && accomp === true) {
      setRoute("/build-resume/form/finalize/add-accomp");
    } else if (data[4]==='ad' && addInfo === true) {
      setRoute("/build-resume/form/finalize/add-addInfo");
    }
  }, [routesInfo]);

  return route;
};

export default useRouter;
