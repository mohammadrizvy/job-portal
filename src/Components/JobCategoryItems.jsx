import React from 'react';

const JobCategoryItems = ({category}) => {
    const { img, categoryName, jobAmount } = category;

    return (
      <div className="bg-blue-50 rounded-md p-8">
        <span>
          <img src={img} className="rounded-md pb-4" alt="" />
        </span>
        <span className="font-extrabold text-base pt-4">{categoryName}</span>
        <br />
        <span className="text-xs font-semibold text-slate-500 pt-4">
          {jobAmount}
        </span>
      </div>
    );
};

export default JobCategoryItems;