import '../animations/FormAnimation.css'

const FormContactSection = () => {
  const lableClassNames =
    "flex flex-col w-[47%] text-[0.63rem] uppercase font-bold gap-y-2";
  const inputClassNames =
    "h-10 border border-gray-400 text-base p-2 font-normal outline outline-0 focus:border-b-[2.3px] focus:border-b-[#003459] ";

  return (
    <div className="mx-10 my-0 h-[94vh]  flex items-center justify-between ">
      <div className="h-4/5 flex flex-col justify-start gap-y-12">
        <div className="font-semibold text-3xl text-black flex flex-col gap-y-3">
          What’s the best way for employers to contact you?
          <span className='text-lg font-normal'>
          We suggest including an email and phone number.
          </span>
        </div>

        <form className="flex flex-col h-4/5 w-full  gap-y-4 ">
          <div className="flex justify-between   ">
            <lable className={lableClassNames}>
              name
              <input placeholder="John" className={inputClassNames} />
            </lable>
            <lable className={lableClassNames}>
              surname
              <input placeholder="Doe" className={inputClassNames} />
            </lable>
          </div>

          <div className="flex justify-between">
            <lable className={lableClassNames}>
              city
              <input placeholder="New Delhi" className={inputClassNames} />
            </lable>
            <lable className={lableClassNames}>
              country
              <input placeholder="India" className={inputClassNames} />
            </lable>
          </div>

          <div className="flex justify-between ">
            <lable className={lableClassNames}>
              Phone
              <input placeholder="+91 9456230481" className={inputClassNames} />
            </lable>
            <lable className={lableClassNames}>
              Email
              <input placeholder="doe@gmail.com" className={inputClassNames} />
            </lable>
          </div>

          <div className="flex justify-between  ">
            <lable className={lableClassNames}>
              State
              <input placeholder="UttarPradesh" className={inputClassNames} />
            </lable>
            <lable className={lableClassNames}>
              Pin Code
              <input placeholder="110034" className={inputClassNames} />
            </lable>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default FormContactSection;
