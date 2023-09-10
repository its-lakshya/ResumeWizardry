import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";

const Template1 = () => {
  const headingCss = 'font-extrabold uppercase  tracking-[0.07em] w-full text-sm mb-[2px]'
  const headingContentCss = 'w-full flex flex-col gap-1'

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
    if(store.certifications===true || combinedSummaryDetails.certifications){setCertificationsVisibility('visible')}
    if(store.certifications===false){setCertificationsVisibility('hidden')}
    if(store.languages===true){setLanguagesVisibility('visible')}
    if(store.languages===false){setLanguagesVisibility('hidden')}
    if(store.accomplishments===true || combinedSummaryDetails.accomplishments){setAccomplishmentsVisibility('visible')}
    if(store.accomplishments===false){setAccomplishmentsVisibility('hidden')}
    if(store.additionalInformation===true || combinedSummaryDetails.additionalInfo){setAddInfoVisibility('visible')}
    if(store.additionalInformation===false){setAddInfoVisibility('hidden')}
  },[store])

//scale-50 self-start h-[11.69in] w-[8.27in]
//self-center h-[297mm] w-[210mm] flex flex-col
//w-full flex items-center justify-center
//w-full Name

  return (
    <div id='resume' >
    <div className="self-center h-[222.5mm] w-[160mm] bg-white flex flex-col justify-center items-center "  >
      <div
        className={`[&>*]:mx-4 h-28 w-full flex items-center justify-center  ${color} `}
      >
        <div className="h-28 flex flex-col items-center justify-center uppercase text-[#c5b58b] gap-4" >
          <div className="font-medium text-3xl font-serif tracking-[0.27em] flex justify-center items-center">
            {
              contactDetails.name ? (
                <div>{contactDetails.name} {contactDetails.surname}</div>
              ) : (
                <div>lakshya kumar</div>
              )
            }
          </div>
          <div className="tracking-[0.15em] font-sans text-xs">
            {
              contactDetails.title?(
                <div>{contactDetails.title}</div>
                ) : (
                <div>Your professional title here</div>
              )
            }
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full px-6 py-6 flex items-center justify-center ${textColor} text-xs font-semibold `}
      >
        <div className="w-full h-full flex justify-center itmes-center">
          <div className=" h-full w-64 flex flex-col justify-start items-center gap-y-4  overflow-hidden  ">
            <div className={`${headingContentCss}`}>
              <div className={`${headingCss}`}>
                contact
              </div>
              <div className="">{contactDetails.phone?(<span>{contactDetails.phone}</span>) : (null)}</div>
              <div className="">{contactDetails.email?(<span>{contactDetails.email}</span>) : (null)}</div>
              <div className="">{contactDetails.city || contactDetails.pincode ?(<span>{contactDetails.city}, {contactDetails.pincode}</span>) : (null)}</div>
              <div className="">{contactDetails.state ||contactDetails.country ?(<span>{contactDetails.state}, {contactDetails.country}</span>) : (null)}</div>
            </div>
            <div className={`${headingContentCss}`}>
              <div className={`${headingCss}`}>
                Education
              </div>
              <div className="w-full flex flex-col gap-1 mb-2">
              <div className="">{educationDetails.degree[0] || educationDetails.fieldofStudy[0]?(<span>{educationDetails.degree[0]} / {educationDetails.fieldofStudy[0]}</span>) : null}</div>
              <div className="">{educationDetails.instituteName[0]?(<span>{educationDetails.instituteName[0]}</span>) : null}</div>
              <div className="">{educationDetails.instituteLocation[0]?(<span>{educationDetails.instituteLocation[0]}</span>) : null} </div>
              <div className="">{educationDetails.graduationStart[0] || educationDetails.graduationEnd[0]?(<span>{educationDetails.graduationStart[0]} to {educationDetails.graduationEnd[0]}</span>) : (null)} </div>
              </div> 
              {
                educationDetails.instituteName[1] ? (
                  <div className="w-full flex flex-col gap-1 mb-2">
                  <div className="">{educationDetails.degree[1] || educationDetails.fieldofStudy[1] ?(<span>{educationDetails.degree[1]} / {educationDetails.fieldofStudy[1]}</span>) : (null)}</div>
                  <div className="">{educationDetails.instituteName[1]?(<span>{educationDetails.instituteName[1]}</span>) : (null)}</div>
                  <div className="">{educationDetails.instituteLocation[1]?(<span>{educationDetails.instituteLocation[1]}</span>) : (null)} </div>
                  <div className="">{educationDetails.graduationStart[1] || educationDetails.graduationEnd[1] ?(<span>{educationDetails.graduationStart[1]} to {educationDetails.graduationEnd[1]}</span>) : (null)} </div>
                  </div>
                ) :(null)
              }
              {
                educationDetails.instituteName[2] ? (
              <div className="w-full flex flex-col gap-1 mb-2">
              <div className="">{educationDetails.degree[2] || educationDetails.fieldofStudy[2] ?(<span>{educationDetails.degree[2]} / {educationDetails.fieldofStudy[2]}</span>) : null}</div>
              <div className="">{educationDetails.instituteName[2]?(<span>{educationDetails.instituteName[2]}</span>) : null}</div>
              <div className="">{educationDetails.instituteLocation[2]?(<span>{educationDetails.instituteLocation[2]}</span>) : null} </div>
              <div className="">{educationDetails.graduationStart[2] || educationDetails.graduationEnd[2]?(<span>{educationDetails.graduationStart[2]} to {educationDetails.graduationEnd[2]}</span>) : null} </div>
              </div>
                ):(null)
              }
            </div>
            <div className={`${headingContentCss}`}>
              <div className={`${headingCss}`}>
                skills
              </div>
              {skillDetails.skill[0] ? (<span>{skillDetails.skill[0]}</span>) : (null)} 
              {skillDetails.skill[1] ? (<span>{skillDetails.skill[1]}</span>) : (null)} 
              {skillDetails.skill[2] ? (<span>{skillDetails.skill[2]}</span>) : (null)} 
              {skillDetails.skill[3] ? (<span>{skillDetails.skill[3]}</span>) : (null)} 
              {skillDetails.skill[4] ? (<span>{skillDetails.skill[4]}</span>) : (null)} 
              {skillDetails.skill[5] ? (<span>{skillDetails.skill[5]}</span>) : (null)} 
              {skillDetails.skill[6] ? (<span>{skillDetails.skill[6]}</span>) : (null)} 
              {skillDetails.skill[7] ? (<span>{skillDetails.skill[7]}</span>) : (null)} 
              {skillDetails.skill[8] ? (<span>{skillDetails.skill[8]}</span>) : (null)} 
              {skillDetails.skill[9] ? (<span>{skillDetails.skill[9]}</span>) : (null)} 
            </div>

            <div className={`${headingContentCss} ${linksVisibility}`}>
              <div className={`${headingCss}`}>
                links
              </div>
              {linkLangDetails.link1 ? (<span>{linkLangDetails.link1}</span>) : (null)}
              {linkLangDetails.link2 ? (<span>{linkLangDetails.link2}</span>) : (null)}
              {linkLangDetails.link3 ? (<span>{linkLangDetails.link3}</span>) : (null)}
              {linkLangDetails.link4 ? (<span>{linkLangDetails.link4}</span>) : (null)}
              {linkLangDetails.link5 ? (<span>{linkLangDetails.link5}</span>) : (null)}
            </div>

            <div className={`${headingContentCss} ${languagesVisibility}`}>
              <div className={`${headingCss}`}>
                languages
              </div>
              {linkLangDetails.lang1 ? (<span>{linkLangDetails.lang1}</span>) : (null)}
              {linkLangDetails.lang2 ? (<span>{linkLangDetails.lang2}</span>) : (null)}
              {linkLangDetails.lang3 ? (<span>{linkLangDetails.lang3}</span>) : (null)}
              {linkLangDetails.lang4 ? (<span>{linkLangDetails.lang4}</span>) : (null)}
              {linkLangDetails.lang5 ? (<span>{linkLangDetails.lang5}</span>) : (null)}
            </div>
          </div>
          
          <div className="h-full w-full pl-4 pr-2 flex flex-col gap-4 text-justify border-l border-gray-400">
            <div className={`${headingContentCss}`}>
              <div className={`${headingCss}`}>
                summary
              </div>
              <div>
                {summaryDetails.summary ? (summaryDetails.summary) : null}
              </div>
            </div>

            <div className={`${headingContentCss}`}>
              <div className={`${headingCss}`}>
                professional experience
              </div>

              <div className="flex flex-col gap-2">
                {experienceDetails.title[0] ? (<>
                  <div>
                  <div className="uppercase font-bold">{experienceDetails.title[0] ? (experienceDetails.title[0]):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization[0] ? (experienceDetails.organization[0]):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city[0] || experienceDetails.country[0] ? (<>{experienceDetails.city[0]}, {experienceDetails.country[0]}</>):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start[0] || experienceDetails.end[0] ? (<>{experienceDetails.start[0]} to {experienceDetails.end[0]}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description[0][0] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[0][0]}</div>) : (null)}
                {experienceDetails.description[0][1] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[0][1]}</div>) : (null)}
                {experienceDetails.description[0][2] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[0][2]}</div>) : (null)}
                {experienceDetails.description[0][3] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[0][3]}</div>) : (null)}
                {experienceDetails.description[0][4] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[0][4]}</div>) : (null)}
                </div>
                </> ) : null}                
              </div>

              <div className="flex flex-col gap-2">
              {experienceDetails.title[1] ? (<>
                  <div>
                  <div className="uppercase">{experienceDetails.title[1] ? (experienceDetails.title[1]):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization[1] ? (experienceDetails.organization[1]):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city[1] || experienceDetails.country[1]? (<>{experienceDetails.city[1]}, {experienceDetails.country[1]}</>):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start[1] || experienceDetails.end[1] ? (<>{experienceDetails.start[1]} to {experienceDetails.end[1]}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description[1][1] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[1][1]}</div>) : (null)}
                {experienceDetails.description[1][2] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[1][2]}</div>) : (null)}
                {experienceDetails.description[1][3] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[1][3]}</div>) : (null)}
                {experienceDetails.description[1][4] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[1][4]}</div>) : (null)}
                {experienceDetails.description[1][5] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[1][5]}</div>) : (null)}
                </div>
                </> ) : null}
              </div>

              <div className="flex flex-col gap-2">
              {experienceDetails.title[2] ? (<>
                  <div>
                  <div className="uppercase">{experienceDetails.title[2] ? (experienceDetails.title[2]):(null)}</div>
                  <div className="flex capitalize gap-x-2">
                    <span>{experienceDetails.organization[2] ? (experienceDetails.organization[2]):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.city[2] || experienceDetails.country[2] ? (<>{experienceDetails.city[2]}, {experienceDetails.country[2]}</>):(null)}</span>
                    <span>|</span>
                    <span>{experienceDetails.start[2] || experienceDetails.end[2]? (<>{experienceDetails.start[2]} to {experienceDetails.end[2]}</>):(null)}</span>
                  </div>
                </div>

                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                {experienceDetails.description[2][0] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[2][0]}</div>) : (null)}
                {experienceDetails.description[2][1] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[2][1]}</div>) : (null)}
                {experienceDetails.description[2][2] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[2][2]}</div>) : (null)}
                {experienceDetails.description[2][3] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[2][3]}</div>) : (null)}
                {experienceDetails.description[2][4] ? (<div className="flex items-center"><BsDot/>{experienceDetails.description[2][4]}</div>) : (null)}
                </div>
                </> ) : null}
              </div>
            </div>

            <div className={`${headingContentCss} ${certificationsVisibility}`}>
              <div className={`${headingCss}`}>
                certifications 
              </div>
              <div>
                {combinedSummaryDetails.certifications ? (combinedSummaryDetails.certifications) : null}
              </div>
            </div>


            <div className={`${headingContentCss} ${accomplishmentsVisibility}`}>
              <div className={`${headingCss}`}>
                accomplishments 
              </div>
              <div>
              {combinedSummaryDetails.accomplishments ? (combinedSummaryDetails.accomplishments) : null}
              </div>
            </div>


            <div className={`${headingContentCss} ${addInfoVisibility}`}>
              <div className={`${headingCss}`}>
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
    </div>
  );
};

export default Template1;

/* <div className={'h-1/6 w-full'} style={{ background: color }}> */
