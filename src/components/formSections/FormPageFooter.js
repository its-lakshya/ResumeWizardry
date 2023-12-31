import { Link, useNavigate } from "react-router-dom";
import HomePageLandingButton from "../buttons/HomePageLandingButton";
import { useSelector } from "react-redux";

const FormPageFooter = () => {
  const navigate = useNavigate();
  const nextPage = useSelector((store) => store.routesDetails.nextRoute);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-200 h-20 shadow-inner">
      <div className="mx-10 h-full flex items-center justify-between max-md:mx-2 ">
        <Link onClick={handleClick}>
          <HomePageLandingButton
            bgColor="bg-white"
            textColor="text-black"
            hoverColor="bg-[#428CD4]"
            hoverBorderColor="border-[#428CD4]"
            text="← back"
            height="h-[3.5rem] max-md:h-[3.1rem]"
            width="w-52 max-md:w-36 max-sm:w-28"
            // onClick={handleBackClick()}
          />
        </Link>

        <Link to={nextPage}>
          <HomePageLandingButton
            bgColor="bg-[#003459]"
            textColor="text-white"
            hoverColor="bg-[#428CD4]"
            hoverBorderColor="border-[#428CD4]"
            text="next →"
            height="h-[3.5rem] max-md:h-[3.1rem]"
            width="w-52 max-md:w-36 max-sm:w-28"
          />
        </Link>
      </div>
    </div>
  );
};

export default FormPageFooter;
