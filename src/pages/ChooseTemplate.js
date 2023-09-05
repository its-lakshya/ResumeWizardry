import { Link } from "react-router-dom";
import Template1 from "../assets/Resume8.jpg";

const ChooseTemplate = () => {
  return (
    <div className="flex item-center justify-center">
      <div className="flex flex-col item-center justify-start w-3/4 h-full min-h-screen pt-12 gap-y-6 ">
        <div className="flex flex-col items-center justify-start h-fit gap-y-1">
          <div className="font-bold text-4xl text-[#003459] tracking-wide">
            Choose from our best templates
          </div>
            {/* <Link to='/build-resume/form/contact'>Towards form</Link> */}
          <div className='text-lg'>You can always change your template later.</div>
        </div>
        <div className='flex items-center justify-center gap-x-12 capitalize font-semibold text-xl'>
        <div className=''>All</div>
        <div className=''>Recommended</div>
        </div>

        {/* <div> */}
          <div className='w-full h-auto flex items-end justify-center'>
          <Link to='/build-resume/form/contact'>
            <div 
            className="w-56 h-80 bg-no-repeat bg-center bg-contain bg-white"
            style={{ backgroundImage: `url(${Template1})` }}
            >              
            </div>
            </Link>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ChooseTemplate;
