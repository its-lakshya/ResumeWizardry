import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";

const Template2 = () => {
  const headingCss = "font-bold capitalize   w-full text-base mb-[2px] ";
  const headingContentCss = "w-full flex flex-col gap-1 ";

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
      <div className="self-center h-[222.5mm] w-[180mm] bg-white flex flex-col justify-center items-center ">
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
                <div className="flex flex-col justify-center items-center">
                  lakshya
                  <div className="text-black text-3xl"> kumar verma</div>
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
        <div
          className={`w-full h-full  flex items-center justify-center ${textColor} text-xs font-semibold  `}
        >
          <div className="w-full h-full flex justify-center itmes-center">
            <div className="py-6 px-[0.8rem] h-full w-80 flex flex-col justify-start items-center gap-y-4  overflow-hidden bg-[#c6c6c6]  ">
              {styleDetails === "contact" ||
              contactDetails.name ||
              contactDetails.phone ? (
                <div className={`${headingContentCss} text-black`}>
                  <div className={`${headingCss}`}>contact</div>
                  <div className="font-semibold text-sm flex items-center gap-x-2 justify-start">
                    <span>Address : </span>
                    {contactDetails.city ? (
                      <span className="text-xs font-light">
                        {contactDetails.city}, {contactDetails.state}
                      </span>
                    ) : null}
                  </div>
                  <div className="font-semibold text-sm flex items-center gap-x-2">
                    <span>Pincode : </span>
                    {contactDetails.country || contactDetails.pincode ? (
                      <span className="text-xs font-light">
                        {contactDetails.pincode}, {contactDetails.country}
                      </span>
                    ) : null}
                  </div>
                  <div className="font-semibold text-sm flex items-center gap-x-2">
                    <span>Email : </span>
                    {contactDetails.email ? (
                      <span className="text-xs font-light">
                        {contactDetails.email}
                      </span>
                    ) : null}
                  </div>

                  <div className="font-semibold text-sm flex items-center gap-x-2">
                    <span>Phone : </span>
                    {contactDetails.phone ? (
                      <span className="text-xs font-light">
                        {contactDetails.phone}
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {styleDetails === "education" ||
              educationDetails.instituteName[0] ? (
                <div className={`${headingContentCss}`}>
                  <div className={`${headingCss}`}>Education</div>
                  <div className="w-full flex flex-col gap-1 mb-2">
                    <div className="">
                      {educationDetails.degree[0] ||
                      educationDetails.fieldofStudy[0] ? (
                        <span>
                          {educationDetails.degree[0]} /{" "}
                          {educationDetails.fieldofStudy[0]}
                        </span>
                      ) : null}
                    </div>
                    <div className="">
                      {educationDetails.instituteName[0] ? (
                        <span>{educationDetails.instituteName[0]}</span>
                      ) : null}
                    </div>
                    <div className="">
                      {educationDetails.instituteLocation[0] ? (
                        <span>{educationDetails.instituteLocation[0]}</span>
                      ) : null}{" "}
                    </div>
                    <div className="">
                      {educationDetails.graduationStart[0] ||
                      educationDetails.graduationEnd[0] ? (
                        <span>
                          {educationDetails.graduationStart[0]} to{" "}
                          {educationDetails.graduationEnd[0]}
                        </span>
                      ) : null}{" "}
                    </div>
                  </div>
                  {educationDetails.instituteName[1] ? (
                    <div className="w-full flex flex-col gap-1 mb-2">
                      <div className="">
                        {educationDetails.degree[1] ||
                        educationDetails.fieldofStudy[1] ? (
                          <span>
                            {educationDetails.degree[1]} /{" "}
                            {educationDetails.fieldofStudy[1]}
                          </span>
                        ) : null}
                      </div>
                      <div className="">
                        {educationDetails.instituteName[1] ? (
                          <span>{educationDetails.instituteName[1]}</span>
                        ) : null}
                      </div>
                      <div className="">
                        {educationDetails.instituteLocation[1] ? (
                          <span>{educationDetails.instituteLocation[1]}</span>
                        ) : null}{" "}
                      </div>
                      <div className="">
                        {educationDetails.graduationStart[1] ||
                        educationDetails.graduationEnd[1] ? (
                          <span>
                            {educationDetails.graduationStart[1]} to{" "}
                            {educationDetails.graduationEnd[1]}
                          </span>
                        ) : null}{" "}
                      </div>
                    </div>
                  ) : null}
                  {educationDetails.instituteName[2] ? (
                    <div className="w-full flex flex-col gap-1 mb-2">
                      <div className="">
                        {educationDetails.degree[2] ||
                        educationDetails.fieldofStudy[2] ? (
                          <span>
                            {educationDetails.degree[2]} /{" "}
                            {educationDetails.fieldofStudy[2]}
                          </span>
                        ) : null}
                      </div>
                      <div className="">
                        {educationDetails.instituteName[2] ? (
                          <span>{educationDetails.instituteName[2]}</span>
                        ) : null}
                      </div>
                      <div className="">
                        {educationDetails.instituteLocation[2] ? (
                          <span>{educationDetails.instituteLocation[2]}</span>
                        ) : null}{" "}
                      </div>
                      <div className="">
                        {educationDetails.graduationStart[2] ||
                        educationDetails.graduationEnd[2] ? (
                          <span>
                            {educationDetails.graduationStart[2]} to{" "}
                            {educationDetails.graduationEnd[2]}
                          </span>
                        ) : null}{" "}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {styleDetails === "skills" || skillDetails.skill[0] ? (
                <div className={`${headingContentCss} text-black `}>
                  <div className={`font-semibold uppercase text-base`}>
                    skills
                  </div>
                  {skillDetails.skill[0] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[0]}
                    </span>
                  ) : null}
                  {skillDetails.skill[1] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[1]}
                    </span>
                  ) : null}
                  {skillDetails.skill[2] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[2]}
                    </span>
                  ) : null}
                  {skillDetails.skill[3] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[3]}
                    </span>
                  ) : null}
                  {skillDetails.skill[4] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[4]}
                    </span>
                  ) : null}
                  {skillDetails.skill[5] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[5]}
                    </span>
                  ) : null}
                  {skillDetails.skill[6] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[6]}
                    </span>
                  ) : null}
                  {skillDetails.skill[7] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[7]}
                    </span>
                  ) : null}
                  {skillDetails.skill[8] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[8]}
                    </span>
                  ) : null}
                  {skillDetails.skill[9] ? (
                    <span className="text-sm font-light">
                      {skillDetails.skill[9]}
                    </span>
                  ) : null}
                </div>
              ) : null}

              <div
                className={`${headingContentCss} ${languagesVisibility} text-black`}
              >
                <div className={`font-semibold uppercase text-base`}>
                  languages
                </div>
                {linkLangDetails.lang1 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.lang1}
                  </span>
                ) : null}
                {linkLangDetails.lang2 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.lang2}
                  </span>
                ) : null}
                {linkLangDetails.lang3 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.lang3}
                  </span>
                ) : null}
                {linkLangDetails.lang4 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.lang4}
                  </span>
                ) : null}
                {linkLangDetails.lang5 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.lang5}
                  </span>
                ) : null}
              </div>

              <div
                className={`${headingContentCss} ${linksVisibility}  text-black`}
              >
                <div className={`font-semibold uppercase text-base`}>links</div>
                {linkLangDetails.link1 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.link1}
                  </span>
                ) : null}
                {linkLangDetails.link2 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.link2}
                  </span>
                ) : null}
                {linkLangDetails.link3 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.link3}
                  </span>
                ) : null}
                {linkLangDetails.link4 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.link4}
                  </span>
                ) : null}
                {linkLangDetails.link5 ? (
                  <span className="text-sm font-light">
                    {linkLangDetails.link5}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="h-full w-full py-6 px-4  flex flex-col gap-4 text-justify ">
              {styleDetails === "summary" || summaryDetails.summary ? (
              <div className={`${headingContentCss}`}>
                <div className={`text-lg uppercase`}>summary</div>
                <div className="text-black font-light">
                  {summaryDetails.summary ? summaryDetails.summary : null}
                </div>
              </div>
              ) : null}

              {styleDetails === "education" ||
              educationDetails.instituteName[0] ? (
                <div className={`${headingContentCss} `}>
                  <div className={`text-lg uppercase`}>Education</div>
                  <div className="w-full flex flex-col gap-1 mb-2">
                    <div className="text-black font-normal">
                      {educationDetails.degree[0] ||
                      educationDetails.fieldofStudy[0] ? (
                        <span>
                          {educationDetails.degree[0]} /{" "}
                          {educationDetails.fieldofStudy[0]}
                        </span>
                      ) : null}
                    </div>
                    <div className="uppercase text-black text-[0.85rem]">
                      {educationDetails.instituteName[0] ? (
                        <span>{educationDetails.instituteName[0]}</span>
                      ) : null}
                    </div>
                    <div className="text-black font-light">
                      {educationDetails.instituteLocation[0] ||
                      educationDetails.graduationStart[2] ||
                      educationDetails.graduationEnd[2] ? (
                        <span>
                          {educationDetails.instituteLocation[0]}
                          {", "}
                          {educationDetails.graduationStart[0]} to{" "}
                          {educationDetails.graduationEnd[0]}
                        </span>
                      ) : null}{" "}
                    </div>
                  </div>
                  {educationDetails.instituteName[1] ? (
                    <div className="w-full flex flex-col gap-1 mb-2">
                      <div className="text-black font-normal">
                        {educationDetails.degree[1] ||
                        educationDetails.fieldofStudy[1] ? (
                          <span>
                            {educationDetails.degree[1]} /{" "}
                            {educationDetails.fieldofStudy[1]}
                          </span>
                        ) : null}
                      </div>
                      <div className="uppercase text-black text-[0.85rem]">
                        {educationDetails.instituteName[1] ? (
                          <span>{educationDetails.instituteName[1]}</span>
                        ) : null}
                      </div>
                      <div className="text-black font-light">
                        {educationDetails.instituteLocation[1] ||
                        educationDetails.graduationStart[2] ||
                        educationDetails.graduationEnd[2] ? (
                          <span>
                            {educationDetails.instituteLocation[1]}
                            {", "}
                            {educationDetails.graduationStart[1]} to{" "}
                            {educationDetails.graduationEnd[1]}
                          </span>
                        ) : null}{" "}
                      </div>
                    </div>
                  ) : null}
                  {educationDetails.instituteName[2] ? (
                    <div className="w-full flex flex-col gap-1 mb-2">
                      <div className="text-black font-normal">
                        {educationDetails.degree[2] ||
                        educationDetails.fieldofStudy[2] ? (
                          <span>
                            {educationDetails.degree[2]} /{" "}
                            {educationDetails.fieldofStudy[2]}
                          </span>
                        ) : null}
                      </div>
                      <div className="uppercase text-black text-[0.85rem]">
                        {educationDetails.instituteName[2] ? (
                          <span>{educationDetails.instituteName[2]}</span>
                        ) : null}
                      </div>
                      <div className="text-black font-light">
                        {educationDetails.instituteLocation[2] ||
                        educationDetails.graduationStart[2] ||
                        educationDetails.graduationEnd[2] ? (
                          <span>
                            {educationDetails.instituteLocation[2]}
                            {educationDetails.graduationStart[2]} to{" "}
                            {educationDetails.graduationEnd[2]}
                          </span>
                        ) : null}{" "}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {styleDetails === "experience" ||
              experienceDetails.title[0] ||
              experienceDetails.organization[0] ? (
                <div className={`${headingContentCss}`}>
                  <div className={`text-lg uppercase`}>
                    professional experience
                  </div>

                  <div className="flex flex-col gap-1">
                    {experienceDetails.title[0] ? (
                      <>
                        <div>
                          <span className="flex  gap-x-2 uppercase text-black text-[0.85rem]">
                            {experienceDetails.organization[0]
                              ? experienceDetails.organization[0]
                              : null}
                          </span>
                          <div className="text-black font-normal uppercase text-[0.68rem]">
                            {experienceDetails.title[0]
                              ? experienceDetails.title[0]
                              : null}
                          </div>
                          <div className="text-black font-light text-[0.65rem]">
                            <span>|</span>
                            <span>
                              {experienceDetails.city[0] ||
                              experienceDetails.country[0] ? (
                                <>
                                  {experienceDetails.city[0]},{" "}
                                  {experienceDetails.country[0]}
                                </>
                              ) : null}
                            </span>
                            <span> | </span>
                            <span>
                              {experienceDetails.start[0] ||
                              experienceDetails.end[0] ? (
                                <>
                                  {experienceDetails.start[0]} to{" "}
                                  {experienceDetails.end[0]}
                                </>
                              ) : null}
                            </span>
                          </div>
                        </div>

                        <div className="[&>*]:flex [&>*]:gap-2 flex flex-col text-black font-light">
                          {experienceDetails.description[0][0] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[0][0]}
                            </div>
                          ) : null}
                          {experienceDetails.description[0][1] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[0][1]}
                            </div>
                          ) : null}
                          {experienceDetails.description[0][2] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[0][2]}
                            </div>
                          ) : null}
                          {experienceDetails.description[0][3] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[0][3]}
                            </div>
                          ) : null}
                          {experienceDetails.description[0][4] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[0][4]}
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    {experienceDetails.title[1] ? (
                      <>
                        <div>
                          <span className="flex  gap-x-2 uppercase text-black text-[0.85rem]">
                            {experienceDetails.organization[1]
                              ? experienceDetails.organization[1]
                              : null}
                          </span>
                          <div className="text-black font-normal uppercase text-[0.68rem]">
                            {experienceDetails.title[1]
                              ? experienceDetails.title[1]
                              : null}
                          </div>
                          <div className="text-black font-light text-[0.65rem]">
                            <span>
                              {experienceDetails.city[1] ||
                              experienceDetails.country[1] ? (
                                <>
                                  {experienceDetails.city[1]},{" "}
                                  {experienceDetails.country[1]}
                                </>
                              ) : null}
                            </span>
                            <span> | </span>
                            <span>
                              {experienceDetails.start[1] ||
                              experienceDetails.end[1] ? (
                                <>
                                  {experienceDetails.start[1]} to{" "}
                                  {experienceDetails.end[1]}
                                </>
                              ) : null}
                            </span>
                          </div>
                        </div>

                        <div className="[&>*]:flex [&>*]:gap-2 flex flex-col text-black font-light">
                          {experienceDetails.description[1][1] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[1][1]}
                            </div>
                          ) : null}
                          {experienceDetails.description[1][2] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[1][2]}
                            </div>
                          ) : null}
                          {experienceDetails.description[1][3] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[1][3]}
                            </div>
                          ) : null}
                          {experienceDetails.description[1][4] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[1][4]}
                            </div>
                          ) : null}
                          {experienceDetails.description[1][5] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[1][5]}
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    {experienceDetails.title[2] ? (
                      <>
                        <div>
                          <span className="flex  gap-x-2 uppercase text-black text-[0.85rem]">
                            {experienceDetails.organization[2]
                              ? experienceDetails.organization[2]
                              : null}
                          </span>
                          <div className="text-black font-normal uppercase text-[0.68rem]">
                            {experienceDetails.title[2]
                              ? experienceDetails.title[2]
                              : null}
                          </div>
                          <div className="text-black font-light text-[0.65rem]">
                            <span>
                              {experienceDetails.city[2] ||
                              experienceDetails.country[2] ? (
                                <>
                                  {experienceDetails.city[2]},{" "}
                                  {experienceDetails.country[2]}
                                </>
                              ) : null}
                            </span>
                            <span> | </span>
                            <span>
                              {experienceDetails.start[2] ||
                              experienceDetails.end[2] ? (
                                <>
                                  {experienceDetails.start[2]} to{" "}
                                  {experienceDetails.end[2]}
                                </>
                              ) : null}
                            </span>
                          </div>
                        </div>

                        <div className="[&>*]:flex [&>*]:gap-2 flex flex-col text-black font-light">
                          {experienceDetails.description[2][0] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[2][0]}
                            </div>
                          ) : null}
                          {experienceDetails.description[2][1] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[2][1]}
                            </div>
                          ) : null}
                          {experienceDetails.description[2][2] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[2][2]}
                            </div>
                          ) : null}
                          {experienceDetails.description[2][3] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[2][3]}
                            </div>
                          ) : null}
                          {experienceDetails.description[2][4] ? (
                            <div className="flex items-center">
                              <BsDot />
                              {experienceDetails.description[2][4]}
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className={`${headingContentCss} ${certificationsVisibility} `}>
                <div className={`text-lg uppercase`}>certifications</div>
                <div className="text-black font-thin">
                  {combinedSummaryDetails.certifications
                    ? combinedSummaryDetails.certifications
                    : null}
                </div>
              </div>

              <div className={`${headingContentCss} ${accomplishmentsVisibility}`}>
                <div className={`text-lg uppercase`}>accomplishments</div>
                <div className="text-black font-thin">
                  {combinedSummaryDetails.accomplishments
                    ? combinedSummaryDetails.accomplishments
                    : null}
                </div>
              </div>

              <div className={`${headingContentCss} ${addInfoVisibility} `}>
                <div className={`text-lg uppercase`}>addtional information</div>
                <div className="text-black font-thin">
                  {combinedSummaryDetails.additionalInfo
                    ? combinedSummaryDetails.additionalInfo
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
