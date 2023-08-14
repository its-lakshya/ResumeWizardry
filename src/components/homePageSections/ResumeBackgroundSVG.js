import ResumeBackground from "../../assets/ResumeBackgrounSVG.svg";

const ResumeBackgroundSVG = () => {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-fixed bg-center"
      style={{ backgroundImage: `url(${ResumeBackground})` }}
    ></div>
  );
};

export default ResumeBackgroundSVG;
