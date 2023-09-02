import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";

const Template1 = () => {
  const [linksVisibility, setLinkVisibility] = useState('hidden');
  const [certificationsVisibility, setCertificationsVisibility] = useState('hidden');
  const [languagesVisibility, setLanguagesVisibility] = useState('hidden');
  const [accomplishmentsVisibility, setAccomplishmentsVisibility] = useState('hidden');
  const [addInfoVisibility, setAddInfoVisibility] = useState('hidden');
  
  const store = useSelector((store)=> store.sectionSelectionDetails)
  
  const contactDetails = useSelector((store) => store.contactDetails);
  const educationDetails = useSelector((store)=> store.educationDetails)
  const skillDetails = useSelector((store) => store.skillDetails)
  const linkLangDetails = useSelector((store)=> store.linksLangDetails)
  const summaryDetails = useSelector((store) => store.summaryDetails)
  const experienceDetails = useSelector((store) => store.experienceDetails)
  const combinedSummaryDetails = useSelector((store)=> store.combinedSummaryDetails)

  const x = 1;
  const [color, setColor] = useState(x === 1 ? "bg-[#232f47]" : "bg-[#000000]");
  const [textColor, setTextColor] = useState(
    x === 1 ? "text-[#232f47]" : "text-[#000000]"
  );

  const handleColor = ({ color }) => {
    document.documentElement.style.setProperty("--color", color);
    document.documentElement.style.setProperty("--color", textColor);
  };

  useEffect(()=> {
    if(store.website===true){setLinkVisibility('visible')}
    if(store.website===false){setLinkVisibility('hidden')}
    if(store.certifications===true){setCertificationsVisibility('visible')}
    if(store.certifications===false){setCertificationsVisibility('hidden')}
    if(store.languages===true){setLanguagesVisibility('visible')}
    if(store.languages===false){setLanguagesVisibility('hidden')}
    if(store.accomplishments===true){setAccomplishmentsVisibility('visible')}
    if(store.accomplishments===false){setAccomplishmentsVisibility('hidden')}
    if(store.additionalInformation===true){setAddInfoVisibility('visible')}
    if(store.additionalInformation===false){setAddInfoVisibility('hidden')}
  },[store])



  return (
    <div className="scale-50 self-center h-[11.69in] w-[8.27in] shadow-2xl  flex flex-col bg-white">
      <div
        className={`[&>*]:mx-4 h-48 w-full flex items-center justify-center ${color}`}
      >
        <div className="Name h-32 w-full  flex flex-col items-center justify-center uppercase text-[#c5b58b] gap-4">
          <span className=" font-medium text-5xl font-serif tracking-[0.27em]">
            {
              contactDetails.name ? (
                <span>{contactDetails.name} {contactDetails.surname}</span>
              ) : (
                <span>lakshya kumar</span>
              )
            }
          </span>
          <span className="tracking-[0.15em] font-sans text-base">
            {
              contactDetails.title?(
                <span>{contactDetails.title}</span>
                ) : (
                <span>Your professional title here</span>
              )
            }
          </span>
        </div>
      </div>
      <div
        className={`w-full h-full px-10 py-8 flex items-center justify-center ${textColor} text-[13.5px] font-semibold `}
      >
        <div className="w-full h-full flex justify-center itmes-center">
          <div className=" h-full w-80 flex flex-col justify-start items-center gap-y-8  overflow-hidden  ">
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                contact
              </div>
              <div className="">{contactDetails.phone?(<span>{contactDetails.phone}</span>) : (null)}</div>
              <div className="">{contactDetails.email?(<span>{contactDetails.email}</span>) : (null)}</div>
              <div className="">{contactDetails.city || contactDetails.pincode ?(<span>{contactDetails.city}, {contactDetails.pincode}</span>) : (null)}</div>
              <div className="">{contactDetails.state ||contactDetails.country ?(<span>{contactDetails.state}, {contactDetails.country}</span>) : (null)}</div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                Education
              </div>
              <div className="w-full flex flex-col gap-1 mb-2">
              <div className="">{educationDetails.degree1 || educationDetails.fieldofStudy1?(<span>{educationDetails.degree1} / {educationDetails.fieldofStudy1}</span>) : null}</div>
              <div className="">{educationDetails.instituteName1?(<span>{educationDetails.instituteName1}</span>) : null}</div>
              <div className="">{educationDetails.instituteLocation1?(<span>{educationDetails.instituteLocation1}</span>) : null} </div>
              <div className="">{educationDetails.graduationStart1 || educationDetails.graduationEnd1?(<span>{educationDetails.graduationStart1} to {educationDetails.graduationEnd1}</span>) : (null)} </div>
              </div> 
              {
                educationDetails.instituteName2 ? (
                  <div className="w-full flex flex-col gap-1 mb-2">
                  <div className="">{educationDetails.degree2 || educationDetails.fieldofStudy2 ?(<span>{educationDetails.degree2} / {educationDetails.fieldofStudy2}</span>) : (null)}</div>
                  <div className="">{educationDetails.instituteName2?(<span>{educationDetails.instituteName2}</span>) : (null)}</div>
                  <div className="">{educationDetails.instituteLocation2?(<span>{educationDetails.instituteLocation2}</span>) : (null)} </div>
                  <div className="">{educationDetails.graduationStart2 || educationDetails.graduationEnd2 ?(<span>{educationDetails.graduationStart2} to {educationDetails.graduationEnd1}</span>) : (null)} </div>
                  </div>
                ) :(null)
              }
              {
                educationDetails.instituteName3 ? (
              <div className="w-full flex flex-col gap-1 mb-2">
              <div className="">{educationDetails.degree3 || educationDetails.fieldofStudy3 ?(<span>{educationDetails.degree3} / {educationDetails.fieldofStudy3}</span>) : null}</div>
              <div className="">{educationDetails.instituteName3?(<span>{educationDetails.instituteName3}</span>) : null}</div>
              <div className="">{educationDetails.instituteLocation3?(<span>{educationDetails.instituteLocation3}</span>) : null} </div>
              <div className="">{educationDetails.graduationStart3 || educationDetails.graduationEnd3?(<span>{educationDetails.graduationStart3} to {educationDetails.graduationEnd1}</span>) : null} </div>
              </div>
                ):(null)
              }
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                skills
              </div>
              {skillDetails.skill1 ? (<span>{skillDetails.skill1}</span>) : (null)} 
              {skillDetails.skill2 ? (<span>{skillDetails.skill2}</span>) : (null)} 
              {skillDetails.skill3 ? (<span>{skillDetails.skill3}</span>) : (null)} 
              {skillDetails.skill4 ? (<span>{skillDetails.skill4}</span>) : (null)} 
              {skillDetails.skill5 ? (<span>{skillDetails.skill5}</span>) : (null)} 
              {skillDetails.skill6 ? (<span>{skillDetails.skill6}</span>) : (null)} 
              {skillDetails.skill7 ? (<span>{skillDetails.skill7}</span>) : (null)} 
              {skillDetails.skill8 ? (<span>{skillDetails.skill8}</span>) : (null)} 
              {skillDetails.skill9 ? (<span>{skillDetails.skill9}</span>) : (null)} 
              {skillDetails.skill10 ? (<span>{skillDetails.skill10}</span>) : (null)} 
            </div>

            <div className={`w-full flex flex-col gap-1 ${linksVisibility}`}>
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                links
              </div>
              {linkLangDetails.link1 ? (<span>{linkLangDetails.link1}</span>) : (null)}
              {linkLangDetails.link2 ? (<span>{linkLangDetails.link2}</span>) : (null)}
              {linkLangDetails.link3 ? (<span>{linkLangDetails.link3}</span>) : (null)}
              {linkLangDetails.link4 ? (<span>{linkLangDetails.link4}</span>) : (null)}
              {linkLangDetails.link5 ? (<span>{linkLangDetails.link5}</span>) : (null)}
            </div>

            <div className={`w-full flex flex-col gap-1 ${languagesVisibility}`}>
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                languages
              </div>
              {linkLangDetails.lang1 ? (<span>{linkLangDetails.lang1}</span>) : (null)}
              {linkLangDetails.lang2 ? (<span>{linkLangDetails.lang2}</span>) : (null)}
              {linkLangDetails.lang3 ? (<span>{linkLangDetails.lang3}</span>) : (null)}
              {linkLangDetails.lang4 ? (<span>{linkLangDetails.lang4}</span>) : (null)}
              {linkLangDetails.lang5 ? (<span>{linkLangDetails.lang5}</span>) : (null)}
            </div>
          </div>
          
          <div className="h-full w-full pl-6 flex flex-col gap-8 text-justify border-l border-gray-400">
            <div className="w-full flex flex-col gap-3">
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base">
                summary
              </div>
              <div>
                {summaryDetails.summary ? (summaryDetails.summary) : null}
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base ">
                professional experience
              </div>

              <div className="flex flex-col gap-2">
                {experienceDetails.title1 ? (<>
                  <div>
                  <div className="uppercase">{experienceDetails.title1 ? (experienceDetails.title1):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization1 ? (experienceDetails.organization1):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city1 ? (experienceDetails.city1):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start1 ? (<>{experienceDetails.start1} to {experienceDetails.end1}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description1.a ? (<div className="flex items-center"><BsDot/>{experienceDetails.description1.a}</div>) : (null)}
                {experienceDetails.description1.b ? (<div className="flex items-center"><BsDot/>{experienceDetails.description1.b}</div>) : (null)}
                {experienceDetails.description1.c ? (<div className="flex items-center"><BsDot/>{experienceDetails.description1.c}</div>) : (null)}
                {experienceDetails.description1.d ? (<div className="flex items-center"><BsDot/>{experienceDetails.description1.d}</div>) : (null)}
                {experienceDetails.description1.e ? (<div className="flex items-center"><BsDot/>{experienceDetails.description1.e}</div>) : (null)}
                </div>
                </> ) : null}                
              </div>

              <div className="flex flex-col gap-2">
              {experienceDetails.title2 ? (<>
                  <div>
                  <div className="uppercase">{experienceDetails.title2 ? (experienceDetails.title2):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization2 ? (experienceDetails.organization2):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city2 ? (experienceDetails.city2):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start2 ? (<>{experienceDetails.start2} to {experienceDetails.end2}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description2.a ? (<div className="flex items-center"><BsDot/>{experienceDetails.description2.a}</div>) : (null)}
                {experienceDetails.description2.b ? (<div className="flex items-center"><BsDot/>{experienceDetails.description2.b}</div>) : (null)}
                {experienceDetails.description2.c ? (<div className="flex items-center"><BsDot/>{experienceDetails.description2.c}</div>) : (null)}
                {experienceDetails.description2.d ? (<div className="flex items-center"><BsDot/>{experienceDetails.description2.d}</div>) : (null)}
                {experienceDetails.description2.e ? (<div className="flex items-center"><BsDot/>{experienceDetails.description2.e}</div>) : (null)}
                </div>
                </> ) : null}
              </div>

              <div className="flex flex-col gap-2">
              {experienceDetails.title3 ? (<>
                  <div>
                  <div className="uppercase">{experienceDetails.title3 ? (experienceDetails.title3):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization3 ? (experienceDetails.organization3):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city3 ? (experienceDetails.city3):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start3 ? (<>{experienceDetails.start2} to {experienceDetails.end3}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description3.a ? (<div className="flex items-center"><BsDot/>{experienceDetails.description3.a}</div>) : (null)}
                {experienceDetails.description3.b ? (<div className="flex items-center"><BsDot/>{experienceDetails.description3.b}</div>) : (null)}
                {experienceDetails.description3.c ? (<div className="flex items-center"><BsDot/>{experienceDetails.description3.c}</div>) : (null)}
                {experienceDetails.description3.d ? (<div className="flex items-center"><BsDot/>{experienceDetails.description3.d}</div>) : (null)}
                {experienceDetails.description3.e ? (<div className="flex items-center"><BsDot/>{experienceDetails.description3.e}</div>) : (null)}
                </div>
                </> ) : null}
              </div>
            </div>

            <div className={`w-full flex flex-col gap-3 ${certificationsVisibility}`}>
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base">
                certifications 
              </div>
              <div>
                {combinedSummaryDetails.certifications ? (combinedSummaryDetails.certifications) : null}
              </div>
            </div>


            <div className={`w-full flex flex-col gap-3 ${accomplishmentsVisibility}`}>
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base">
                accomplishments 
              </div>
              <div>
              {combinedSummaryDetails.accomplishments ? (combinedSummaryDetails.accomplishments) : null}
              </div>
            </div>


            <div className={`w-full flex flex-col gap-3 ${addInfoVisibility}`}>
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base">
                addtional information 
              </div>
              <div>
              {combinedSummaryDetails.additionalInfo ? (combinedSummaryDetails.additionalInfo) : null}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;

/* <div className={'h-1/6 w-full'} style={{ background: color }}> */
