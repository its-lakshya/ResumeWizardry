import { Link } from "react-router-dom";
import Template1 from "../assets/Template1.png";
import Template2 from "../assets/Template2.jpg";
import FormPageHeader from "../components/formSections/FormPageHeader";
import { useDispatch } from "react-redux";
import { setTemplate } from "../store/TemplateSlice";

const ChooseTemplate = () => {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(setTemplate(data));
  };

  return (
    <div className="flex flex-col ">
      <FormPageHeader />
      <div className="flex flex-col items-center justify-center my-12">
        <div className="flex flex-col item-center justify-start w-3/4 max-lg:w-full h-full min-h-screen pt-12 max-md:pt-4 gap-y-10 max-md:gap-y-6 max-sm:pt-0 ">
          <div className="flex flex-col items-center justify-start h-fit gap-y-4 ">
            <div className="font-bold text-4xl text-[#003459] tracking-wide max-lg:text-3xl max-md:text-center max-sm:text-2xl ">
              Choose from our magicaly handcrafted template
            </div>
            {/* <Link to='/build-resume/form/contact'>Towards form</Link> */}
            <div className="text-lg">
              You can always change your template later.
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-12 capitalize font-semibold text-lg ">
            <div className="">All</div>
            {/* <div className=''>Recommended</div> */}
          </div>

          {/* <div> */}
          <div className="w-full h-auto flex items-end justify-evenly max-sm:flex-col max-sm:items-center">
            <Link to="/build-resume/form/contact">
              <div
                className="w-56 h-80 max-sm:w-48 max-sm:max-h-72 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${Template1})` }}
                onClick={() => handleClick("Template1")}
              ></div>
            </Link>
            <Link to="/build-resume/form/contact">
              <div
                className="w-56 h-80 max-sm:w-48 max-sm:max-h-72 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${Template2})` }}
                onClick={() => handleClick("Template2")}
              ></div>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
