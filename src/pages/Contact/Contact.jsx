import { useState } from "react";
import SocialItems from "../Shared/SocialItems/SocialItems";

const Contact = () => {
  const [user, setUser] = useState({});

  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(setUser);
    // console.log("input field:", field, "input value:", value);
  };

  return (
    <div className="flex justify-center items-center md:px-52">
      <div className="w-full py-4">
        <form
          onSubmit={handleInputSubmit}
          className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-box-shadow">
          <h3 className="text-center text-2xl md:text-4xl my-4">
            Send your Message
          </h3>
          <div className="mb-4">
            <input
              onBlur={handleInputBlur}
              className="shadow border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              onBlur={handleInputBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <textarea
              onBlur={handleInputBlur}
              className="shadow appearance-none border border-b-slate-800-500 rounded w-full px-3 pt-8 pb-20 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-y overflow-auto"
              type="text"
              name="text"
              placeholder="Message"
            />
          </div>
          <div className="flex items-center justify-between 2xl:justify-center">
            <button type="submit" className="btn btn-active btn-neutral mb-8">
              Send Message
            </button>
          </div>
          <div>
            <div className="flex flex-row justify-center gap-6">
              <SocialItems></SocialItems>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
