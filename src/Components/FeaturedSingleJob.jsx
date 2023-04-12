import React from "react";
import { Link } from "react-router-dom";

const FeaturedSingleJob = ({ job }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    location,
    jobTime,
    jobStatus,
    salary,
    id,
  } = job;
  return (
    <div className=" m-auto mt-10 p-10 outline-blue-500 shadow-sm rounded-md justify-center border border-slate-50-500">
      <span>
        <img className="mb-4 w-48  " src={companyLogo} alt="" />
      </span>
      <span className="font-extrabold text-2xl ">{jobTitle}</span>
      <br />
      <span className="text-slate-500 font-bold ">{companyName}</span>
      <div className="flex mt-4">
        <span className="border-2 border-sky-500 mr-4 p-1 text-sky-500 font-bold">
          {jobStatus}
        </span>
        <span className="border-2 border-sky-500 p-1 text-sky-500 font-bold ">
          {jobTime}
        </span>
      </div>
      <div className="mt-4 mb-2">
        <span className="text-slate-500 font-bold text-sm mr-4">
          {location}
        </span>
        <span className="text-slate-500 font-bold text-sm">
          Salary : {salary}
        </span>
      </div>

      {/* view details button  */}

      <Link to={`/job/${id}`}>
        <button className="btn the-button">View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedSingleJob;
