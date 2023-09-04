import { Link } from "react-router-dom";

const ChooseTemplate = () => {
  return (
    <div className="flex item-center justify-center">
      <div className="flex flex-col item-center justify-start w-3/4 h-full bg-gray-600 min-h-screen pt-12 gap-y-6 ">
        <div className="flex flex-col items-center justify-start bg-yellow-300 h-fit gap-y-1">
          <div className="font-bold text-[2rem] text-[#003459] tracking-wide">
            Choose from our best templates
          </div>
            <Link to='/build-resume/form/contact'>Towards form</Link>
          <div>You can always change your template later.</div>
        </div>
        <div className='flex items-center justify-center'>All</div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
