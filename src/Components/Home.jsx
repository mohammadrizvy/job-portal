import React from "react";

import JobCategory from "./JobCategory";
import FeaturedJob from "./FeaturedJob";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
