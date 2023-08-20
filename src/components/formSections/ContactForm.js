import { labelClassNames, inputClassNames } from "./ConstantClassNames"

const ContactForm = () => {

    return(
        <form className="flex flex-col h-4/5 w-full  gap-y-4 ">
          <div className="flex justify-between   ">
            <label className={labelClassNames}>
              name
              <input placeholder="John" className={inputClassNames} />
            </label>
            <label className={labelClassNames}>
              surname
              <input placeholder="Doe" className={inputClassNames} />
            </label>
          </div>

          <div className="flex justify-between">
            <label className={labelClassNames}>
              city
              <input placeholder="New Delhi" className={inputClassNames} />
            </label>
            <label className={labelClassNames}>
              country
              <input placeholder="India" className={inputClassNames} />
            </label>
          </div>

          <div className="flex justify-between ">
            <label className={labelClassNames}>
              Phone
              <input placeholder="+91 9456230481" className={inputClassNames} />
            </label>
            <label className={labelClassNames}>
              Email
              <input placeholder="doe@gmail.com" className={inputClassNames} />
            </label>
          </div>

          <div className="flex justify-between  ">
            <label className={labelClassNames}>
              State
              <input placeholder="UttarPradesh" className={inputClassNames} />
            </label>
            <label className={labelClassNames}>
              Pin Code
              <input placeholder="110034" className={inputClassNames} />
            </label>
          </div>
        </form>
    )

}

export default ContactForm