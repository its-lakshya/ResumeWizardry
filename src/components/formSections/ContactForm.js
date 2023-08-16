import { lableClassNames, inputClassNames } from "./ConstantClassNames"

const ContactForm = () => {

    return(
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
    )

}

export default ContactForm