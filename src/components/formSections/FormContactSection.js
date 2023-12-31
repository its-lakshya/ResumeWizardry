import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../animations/FormAnimation.css'
import ContactForm from './ContactForm';
import { addStyleSection } from '../../store/FormPageHeaderSlice';
import { setNextRoute } from '../../store/RoutesSlice';

const FormContactSection = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addStyleSection('contact'))
    dispatch(setNextRoute('/build-resume/form/education'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])

  return (
    <div className="my-0 min-h-[83vh] flex items-center ">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-start items-start gap-y-12">
        <div className="font-bold text-3xl text-black flex flex-col gap-y-3 max-md:text-center">
          What’s the best way for employers to contact you?
          <span className='text-lg font-normal'>
          We suggest including an email and phone number.
          </span>
        </div>
        {<ContactForm/>}
        
      </div>
      <div></div>
    </div>
  );
};

export default FormContactSection;
