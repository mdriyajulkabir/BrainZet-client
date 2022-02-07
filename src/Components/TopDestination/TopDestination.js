import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./TopDestination.css";
const TopDestination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div className="mb-14 py-40 top-destination-container ">
      <div>
        <h1 className="top">Top</h1>
        <h1 className="text-center top-header">destination</h1>
        <div className="top-description-div">
          <h1 className="top-description">
            {" "}
            It’s hard enough deciding to move, you don’t have to worry about
            where to move to. These are some of the most popular and best
            locations to move to based on a number of factors.{" "}
          </h1>
        </div>
        <div className="top-hr-container">
          <div className="top-hr"></div>
        </div>
        <div className="px-20 mt-12">
          <div className="grid sm:grid-cols-4  gap-10">
            {destinations.slice(0, 4).map((dt) => (
              <div key={dt.id}>
                <NavLink to={`/destination/${dt._id}`}>
                <div
                  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 img"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${dt.titleImg})`,
                  }}>
                  <h1 className="top-des-name">{dt.name.slice(0, 6)}</h1>
                  <h1 className="top-des-location">{dt.location}</h1>
                </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
