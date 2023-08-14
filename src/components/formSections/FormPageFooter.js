import { Link } from "react-router-dom";
import HomePageLandingButton from "../buttons/HomePageLandingButton";
import { BsArrowLeft } from "react-icons/bs";


const FormPageFooter = () => {
    return(
        <div className="bg-gray-200 h-[10%] shadow-inner">
        <div className='mx-10 h-full flex items-center justify-between'>
          <Link>
          <HomePageLandingButton
              bgColor="bg-white"
              textColor="text-black"
              hoverColor="bg-[#428CD4]"
              hoverBorderColor="border-[#428CD4]"
              text="← back"
              height="h-[3.5rem]"
              width="w-52"
            />
          </Link>

          <Link >
            <HomePageLandingButton
              bgColor="bg-[#004E9A]"
              textColor="text-white"
              hoverColor="bg-[#428CD4]"
              hoverBorderColor="border-[#428CD4]"
              text="next →"
              height="h-[3.5rem]"
              width="w-52"
            />
          </Link>
        </div>
      </div>
    )
}

export default FormPageFooter