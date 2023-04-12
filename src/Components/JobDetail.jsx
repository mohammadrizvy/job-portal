import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "./utilitis/fakedb";

const JobDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/featuredJob.json")
    .then ((res) => res.json())
    .then ((data) => {
      const gotData = data?.find((job) => job?.id === id);
      setData(gotData)
    })
  },[])

  console.log(data)
  
  /* handle */

  const handleAddLocal = (id) => {
    addToDb(id);
  };

  return (
    <div>

      <span className="text-2xl font-extrabold m-auto">Job Details</span>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center">
        <div className="">
          <span className="font-extrabold">{}</span>
        </div>

        {/* Job details card */}
        <div className="">
          <div className=""></div>
          <button
            className="btn the-button btn-wide"
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
