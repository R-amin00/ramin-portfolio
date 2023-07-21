import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import SocialText from "../Shared/SocialItems/SocialText";
const Home = () => {
  return (
    <div className="h-full flex justify-items-center items-center mt-32 pb-32">
      <div className="flex flex-col sm:flex-row items-center gap-14  mx-auto my-0">
        <div className="border border-slate-700 rounded-full p-10">
          <img
            src={logo}
            alt=""
            className="w-44 h-44 rounded-full hover:scale-150 duration-100"
          />
        </div>
        <div className=""></div>
        <div>
          <div>
            <h1 className="text-5xl text-gray-800 animate-bounce duration-0">
              Hi! I am <span className="text-5xl">Ruhul</span>{" "}
            </h1>
            <h5 className="text-xl">Front End Developer</h5>
          </div>
          <div className="flex gap-6 mt-3">
            <Link
              to="/contact"
              className="btn btn-active rounded-sm btn-neutral uppercase hover:scale-105">
              Hire me
            </Link>
            <Link
              to="/projects"
              className="btn btn-outline rounded-sm uppercase">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-row justify-start gap-3 mt-3">
            <SocialText></SocialText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
