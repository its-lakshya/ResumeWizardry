import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../animations/FormAnimation.css'
import ContactForm from './ContactForm';
import { addStyleSection } from '../../store/FormPageHeaderSlice';

const FormContactSection = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addStyleSection('contact'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])

  return (
    <div className="mx-10 my-0 min-h-[83vh] w-1/2  flex items-center ">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-start items-start gap-y-12">
        <div className="font-semibold text-3xl text-black flex flex-col gap-y-3">
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
