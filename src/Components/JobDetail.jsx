import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "./utilitis/fakedb";

const JobDetail = () => {
  const { id } = useParams();
  console.log(id);
  // const [data, setData] = useState([])

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("/featuredJob.json")
  //   .then ((res) => res.json())
  //   .then ((data) => {
  //     const gotData = data?.find((job) => job?.id === id);
  //     setData(gotData)
  //   })
  // },[])

  //   useEffect(() => {
  //     fetch("/featuredJob.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  //  console.log(data)

  const data = useLoaderData();
  console.log(data);

  const gotData = data.find((job) => job.id === id);
  //  setData(gotData)
  console.log(gotData);

  /* handle */

  const handleAddLocal = (id) => {
    addToDb(id);
  };

  return (
    <div className=" the-container">
      {/* <span className="text-2xl font-extrabold m-auto">Job Details</span> */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-between gap-20  mt-20">
        <div className="">
          <span className="">
            <div className="">
              <span className="font-extrabold">Job Description : </span>
              <span>{gotData.jobDescription}</span> <br />
            </div>
            <div className="mt-6">
              <span className="font-extrabold">Job Responsibility : </span>
              <span>{gotData.jobResponsibilitis}</span>
              <br />
            </div>
            <div className="mt-4">
              <span className="font-extrabold">
                Educational Requirements :{" "}
              </span>
              <span>{gotData.educationalRequirements}</span>
              <br />
            </div>
            <div className="mt-5">
              <span className="font-extrabold">Experiences : </span>
              <span className="mt-5">{gotData.experience}</span>
              <br />
            </div>
          </span>
        </div>

        {/* Job details card */}
        <div className=" ">
          <div className=" bg-blue-200 p-10 border-b-2">
            <h1 className="font-extrabold text-xl mb-4 border-b-2">Job Details</h1>
            <span className="font-extrabold mb-3">
              Salary : <span>{gotData.salary}</span>
            </span>
            <br />
            <span className="font-extrabold mb-3">
              Job Title : <span>{gotData.jobTitle}</span>
            </span>
            <h1 className="font-extrabold mb-3 border-b-2">Contact Information</h1>
            <span className="font-extrabold mb-3">
              Phone : <span>{gotData.phone}</span>
            </span>
            <br />
            <span className="font-extrabold mb-3">
              Email : <span>{gotData.email}</span>
            </span>{" "}
            <br />
            <span className="font-extrabold mb-3">
              Address : <span>{gotData.location}</span>
            </span>
          </div>
          <button
            className="btn the-button btn-wide "
            onClick={() => handleAddLocal(id)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
