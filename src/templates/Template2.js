import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";

const Template2 = () => {
  const headingCss =
    "font-extrabold uppercase  tracking-[0.07em] w-full text-sm mb-[2px]";
  const headingContentCss = "w-full flex flex-col gap-1";

  const [linksVisibility, setLinkVisibility] = useState("hidden");
  const [certificationsVisibility, setCertificationsVisibility] =
    useState("hidden");
  const [languagesVisibility, setLanguagesVisibility] = useState("hidden");
  const [accomplishmentsVisibility, setAccomplishmentsVisibility] =
    useState("hidden");
  const [addInfoVisibility, setAddInfoVisibility] = useState("hidden");

  const store = useSelector((store) => store.sectionSelectionDetails);

  const contactDetails = useSelector((store) => store.contactDetails);
  const educationDetails = useSelector((store) => store.educationDetails);
  const skillDetails = useSelector((store) => store.skillDetails);
  const linkLangDetails = useSelector((store) => store.linksLangDetails);
  const summaryDetails = useSelector((store) => store.summaryDetails);
  const experienceDetails = useSelector((store) => store.experienceDetails);
  const combinedSummaryDetails = useSelector(
    (store) => store.combinedSummaryDetails
  );
  const styleDetails = useSelector((store) => store.styleSection.Section);

  const x = 1;
  //   const [color, setColor] = useState(x === 1 ? "bg-[#232f47]" : "bg-[#000000]");
  const [textColor, setTextColor] = useState(
    x === 1 ? "text-[#7b428e]" : "text-[#000000]"
  );

  const handleColor = ({ color }) => {
    // document.documentElement.style.setProperty("--color", color);
    document.documentElement.style.setProperty("--color", textColor);
  };

  useEffect(() => {
    if (store.website === true) {
      setLinkVisibility("visible");
    }
    if (store.website === false) {
      setLinkVisibility("hidden");
    }
    if (
      store.certifications === true ||
      combinedSummaryDetails.certifications
    ) {
      setCertificationsVisibility("visible");
    }
    if (store.certifications === false) {
      setCertificationsVisibility("hidden");
    }
    if (store.languages === true) {
      setLanguagesVisibility("visible");
    }
    if (store.languages === false) {
      setLanguagesVisibility("hidden");
    }
    if (
      store.accomplishments === true ||
      combinedSummaryDetails.accomplishments
    ) {
      setAccomplishmentsVisibility("visible");
    }
    if (store.accomplishments === false) {
      setAccomplishmentsVisibility("hidden");
    }
    if (
      store.additionalInformation === true ||
      combinedSummaryDetails.additionalInfo
    ) {
      setAddInfoVisibility("visible");
    }
    if (store.additionalInformation === false) {
      setAddInfoVisibility("hidden");
    }
  }, [store]);

  return (
    <div id="resume">
      <div className="self-center h-[222.5mm] w-[160mm] bg-white flex flex-col justify-center items-center ">
        <div
          className={`[&>*]:mx-4 h-44 w-full flex items-center justify-center  bg-[#dad8d9] `}
        >
          <div
            className={`h-28 flex flex-col items-center justify-center uppercase ${textColor} gap-4 `}
          >
            <div className="font-medium text-4xl font-sans tracking-[0.2em] flex justify-center items-center">
              {contactDetails.name ? (
                <div>
                  {contactDetails.name} {contactDetails.surname}
                </div>
              ) : (
                <div className='flex flex-col justify-center items-center'>
                  lakshya
                  <div className='text-black text-3xl'> kumar verma</div>
                </div>
              )}
            </div>
            <div className="tracking-[0.15em] font-sans text-sm text-black capitalize">
              {contactDetails.title ? (
                <div>{contactDetails.title}</div>
              ) : (
                <div>Your professional title here</div>
              )}
            </div>
          </div>
        </div>
              </div>
    </div>
  );
};

export default Template2;
