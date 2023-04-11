import React, { useEffect, useState } from "react";
import JobCategoryItems from "./JobCategoryItems";

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <div className="category-title">
        <h1 className="text-center mt-20 text-3xl font-extrabold text-black">
          Job Category List
        </h1>
        <p className="font-semibold text-slate-500 text-center mt-4 text-sm">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="category-items the-container flex justify-center gap-12 mt-10">
        {category.map((category) => (
          <JobCategoryItems
            key={category.id}
            category={category}>
        </JobCategoryItems>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
