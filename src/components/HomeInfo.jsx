import { Link } from "react-router-dom";
import icons from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm: text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}{" "}
      <img src={icons.arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"> Noman</span> 👋 <br /> A Web
      Developer From Bangladesh
    </h1>
  ),
  2: (
    <InfoBox
      text="I've Worked With Many Technology And Picked Up Many Skills Along The Way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Had Multiple Successful Projects Over The Past Years. Curious About The Impact?"
      link="/projects"
      btnText="My portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Neep Help With Your Project? Drop A Line."
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
