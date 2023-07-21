import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar bg-white bg-opacity-60 sticky top-0 px-4 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/" className="uppercase">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="uppercase">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="uppercase">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="uppercase">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="hover:scale-110 border-4 border-gray-950 rounded-full p-2">
            <button className="text-sm sm:text-2xl uppercase">RA</button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="uppercase">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="uppercase">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="uppercase">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="uppercase">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/16hzYwdX6vf-Q6Qm5BGkrygQ1iTXEByUA/view?usp=drive_link"
            className="btn border border-gray-950 rounded-none btn-outline uppercase">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Resume
          </a> */}
          <a
            className="button"
            type="button"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/16hzYwdX6vf-Q6Qm5BGkrygQ1iTXEByUA/view?usp=drive_link">
            <span className="buttonText">RESUME</span>
            <span className="buttonIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
