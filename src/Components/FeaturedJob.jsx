import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedSingleJob from './FeaturedSingleJob';

const FeaturedJob = () => {

  

  const jobs = useLoaderData();
    // console.log(jobs)

    return (
      <div>
        <div className="">
          <h1 className="text-center mt-20 text-3xl font-extrabold text-black">
            Featured Jobs
          </h1>
          <p className="font-semibold text-slate-500 text-center mt-4 text-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="the-container grid gap-4 mb-8 lg:grid-cols-2 sm:grid-cols-1">
         {
          jobs.map( job => <FeaturedSingleJob
          key={job.id}
          job ={job}
          ></FeaturedSingleJob>)
         }
        </div>
      </div>
    );
};

export default FeaturedJob;