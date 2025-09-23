import { logoIconsList } from "../constants";

 // detect specific logos
  // const isSpecial =
  //   icon.imgPath.includes("JavaScript") || icon.imgPath.includes("Gits");

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item w-35 h-35 aspect-square">
      <img src={icon.imgPath} alt={icon.name}
      // className="max-w-full max-h-full object-contain"
      // className={`max-w-full max-h-full object-contain ${
      //     isSpecial ? "scale-75" : ""
      //   }`}
       className="w-4/3 h-4/3 object-contain"
      />
    </div>
  );
};

const LogoSection = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoSection;