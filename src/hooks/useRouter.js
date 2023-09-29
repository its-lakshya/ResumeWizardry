import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useRouter = (data) => {
  const [route, setRoute] = useState();

  const routesInfo = useSelector((store) => store.sectionSelectionDetails);

  
  useEffect(() => {
  const web = routesInfo.website;
  const crtf = routesInfo.certifications;
  const lang = routesInfo.languages;
  const accomp = routesInfo.accomplishments;
  const addInfo = routesInfo.additionalInformation;
    if (data[0] === "w" && web === true) {
      setRoute("/build-resume/form/finalize/add-links");
    } else if (crtf === true && data[1] === "c"  ) {
      setRoute("/build-resume/form/finalize/add-crtf");
    } else if ( lang === true && data[2] === "l" ) {
      setRoute("/build-resume/form/finalize/add-lang");
    } else if (accomp === true && data[3] === "ac" ) {
      setRoute("/build-resume/form/finalize/add-accomp");
    } else if ( addInfo === true && data[4] === "ad" ) {
      setRoute("/build-resume/form/finalize/add-addInfo");
    } else if (data[5] === "d") {
      setRoute("/build-resume/download");
    }
  }, [routesInfo]);

  return route;
};

export default useRouter;
