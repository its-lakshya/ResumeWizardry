import { useState } from "react";

const Template1 = () => {
  const x = 1;

  const [color, setColor] = useState(x === 1 ? "bg-[#094567]" : "bg-[#000000]");

  const handleColor = ({ color }) => {
    document.documentElement.style.setProperty("--color", color);
  };

  return (
    <div className="m-auto scale-75 self-center h-[11.69in] w-[8.27in] border border-black ">
      <div className={`[&>*]:mx-4 h-1/6 w-full ${color}`}>
        <div className="Name h-16 bg-green-300 "></div>
      </div>
    </div>
  );
};

export default Template1;

/* <div className={'h-1/6 w-full'} style={{ background: color }}> */
