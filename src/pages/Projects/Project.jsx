const Project = ({ project }) => {
  const { title, des, img } = project;
  return (
    <>
      <div>
        <div className="card h-96 w-72 md:w-96 border border-gray-300 rounded-none hover:shadow-xl">
          <figure>
            <img src={img} alt="projects" className="w-96 h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{des}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-active rounded-sm btn-neutral text-white hover:bg-white hover:text-black uppercase">
                Github
              </button>
              <button className="btn btn-outline rounded-sm uppercase">
                live view
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
