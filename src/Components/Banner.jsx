import React from "react";
import Lottie from "lottie-react";
import lottie from "../assets/interview.json";
const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-between the-container lg:flex-row mt-10">
        <div>
          <p className="text-5xl text-black font-extrabold">One Step</p>
          <br />
          <p className="text-5xl text-black font-extrabold">Closer To Your</p>
          <br />
          <p className="text-5xl font-extrabold text-blue-400">Dream Job</p>
          <br />
          <p className="w-6/12 text-gray-500 font-semibold">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn the-button">
            Get Started
          </button>
        </div>
        <div className="relative lg:w-full ">
          <div className="w-full lg:w-full lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={lottie} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
