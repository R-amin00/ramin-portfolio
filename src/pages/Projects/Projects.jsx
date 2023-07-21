import Project from "./Project";
import carDoctor from "../../assets/projects/car-doctor.png";
import emaJhon from "../../assets/projects/ema-jhon.png";

const projects = [
  {
    id: 1,
    title: "Car Doctor",
    img: carDoctor,
    des: `"Car Doctor" is an web application where provide various car services....`,
  },
  {
    id: 2,
    title: "Ema Jhon",
    img: emaJhon,
    des: `"Ema Jhon" is an e-commerce web application which provide many types of products....`,
  },
  {
    id: 3,
    title: "Natours",
    img: "",
    des: `"Natours" is a online web application which provides `,
  },
  {
    id: 4,
    title: "Natours",
    img: "",
    des: `"Natours" is a online web application which provides `,
  },
];
const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-32 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-20 bg-white w-11/12 md:w-full my-14 p-6 shadow-box-shadow py-10">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
        <button className="btn border-gray-700 rounded-sm bg-transparent hover:bg-black hover:text-white mb-16 uppercase">
          More Projects
        </button>
      </div>
    </>
  );
};

export default Projects;
