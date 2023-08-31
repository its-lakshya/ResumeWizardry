import { useState } from "react";
import { useSelector } from "react-redux";

const Template1 = () => {
  const contactDetails = useSelector((store) => store.contactDetails);

  const x = 1;
  const [color, setColor] = useState(x === 1 ? "bg-[#232f47]" : "bg-[#000000]");
  const [textColor, setTextColor] = useState(
    x === 1 ? "text-[#232f47]" : "text-[#000000]"
  );

  const handleColor = ({ color }) => {
    document.documentElement.style.setProperty("--color", color);
    document.documentElement.style.setProperty("--color", textColor);
  };

  return (
    <div className="scale-50 self-center h-[11.69in] w-[8.27in] shadow-2xl  flex flex-col bg-white">
      <div
        className={`[&>*]:mx-4 h-48 w-full flex items-center justify-center ${color}`}
      >
        <div className="Name h-32 w-full  flex flex-col items-center justify-center uppercase text-[#c5b58b] gap-4">
          <span className=" font-medium text-5xl font-serif tracking-[0.27em]">
            lakshya kumar
          </span>
          <span className="tracking-[0.15em] font-sans text-base">
            Your professional title here
          </span>
        </div>
      </div>
      <div
        className={`w-full h-full px-12 py-14 flex items-center justify-center ${textColor} text-[13.5px] font-semibold `}
      >
        <div className="w-full h-full flex justify-center itmes-center">
          <div className=" h-full w-80 flex flex-col justify-start items-center gap-y-12  overflow-hidden border-r border-gray-400 ">
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                contact
              </div>
              <div className="">9528194477</div>
              <div className="">kumarlakshya101@gmail.com</div>
              <div className="">Noida (201301) </div>
              <div className="">Uttar Pradesh, India</div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                Education
              </div>
              <div className="">B-tech / Computer Science</div>
              <div className="">JSS Academy </div>
              <div className="">Noida </div>
              <div className="">22/4/20 to 10/5/23</div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="font-extrabold uppercase  tracking-[0.12em] w-full text-base mb-2">
                skills
              </div>
              <div className="">JavaScript</div>
              <div className="">Learship</div>
              <div className="">Time Hacker</div>
              <div className="">Greate Communicator</div>
              <div className="">Solidity</div>
              <div className="">React</div>
            </div>
          </div>

          <div className="h-full w-full px-6 flex flex-col gap-8 text-justify">
            <div className="w-full flex flex-col gap-3">
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base">
                summary
              </div>
              <div>
                Front End Developer with a focus on React.js. Developed a
                complex, interactive dashboard for a SaaS company, improving
                customer retention by 15%. Managed a consistent release cycle,
                reducing bugs by 20% and increasing overall team productivity.
                Brings a combination of startup agility and enterprise-level
                experience to the table.
                <div className="h-4"> </div>
                Developed a progressive web app as a capstone project, which
                garnered positive feedback for its intuitive interface. Assisted
                in the development of a high-traffic e-commerce site,
                contributing to a 20% increase in sales. JavaScript
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="font-extrabold uppercase tracking-[0.12em] w-full text-base ">
                professional experience
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <div className="uppercase">Web developer</div>
                  <div className="flex capitalize gap-x-2">
                    <span>company name</span>
                    <span>|</span>
                    <span>city, country </span>
                    <span>|</span>
                    <span>beginning date - end date</span>
                  </div>
                </div>
                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                  <div className="">
                    - <div>Revamped web application security applications, minimizing
                      hacker attacks.
                      </div>
                  </div>
                  <div className="">
                    - <div>Designed and developed user friendly websites, including optimized checkout page that increased user clicks.
                      </div>
                  </div>
                  <div className="">
                    - <div>Trained over 50 staff members in internal web functions.
                      </div>
                  </div>
                  <div className="">
                    - <div>Fixed bugs from existing websites and implementd enhancements that significantly improved web functionality 
                      and speed.
                      </div>
                  </div>
                  <div className="">
                    - <div>Developed dynamic and interactive website that ensured high traffic, page view and user experience.
                      </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <div className="uppercase">Web developer</div>
                  <div className="flex capitalize gap-x-2">
                    <span>company name</span>
                    <span>|</span>
                    <span>city, country </span>
                    <span>|</span>
                    <span>beginning date - end date</span>
                  </div>
                </div>
                <div className='[&>*]:flex [&>*]:gap-2 flex flex-col '>
                  <div className="">
                    - <div>Revamped web application security applications, minimizing
                      hacker attacks.
                      </div>
                  </div>
                  <div className="">
                    - <div>Designed and developed user friendly websites, including optimized checkout page that increased user clicks.
                      </div>
                  </div>
                  <div className="">
                    - <div>Trained over 50 staff members in internal web functions.
                      </div>
                  </div>
                  <div className="">
                    - <div>Fixed bugs from existing websites and implementd enhancements that significantly improved web functionality 
                      and speed.
                      </div>
                  </div>
                  <div className="">
                    - <div>Developed dynamic and interactive website that ensured high traffic, page view and user experience.
                      </div>
                  </div>
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
