import React, { useEffect, useState } from "react";
import "./MoreDestination.css";

const MoreDestination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div className="more-destination-container mb-14 py-40">
      <div>
        <h1 className="more">more</h1>
        <h1 className="text-center more-header">destination</h1>
        <div className="more-description-div">
          <h1 className="more-description">
            {" "}
            more destinations Your peace of mind doesn’t have to be tied to
            where everyone else is. We have a good number of travel and
            relocation destinations. Take your time and find the perfect one for
            you. Vík í Mýrda Iceland Hamnoy village Norway. Estaing France
            Montego Bay JAMAICA
          </h1>
        </div>
        <div className="more-hr-container">
          <div className="more-hr"></div>
        </div>
      </div>
      <div class="grid grid-rows-3 grid-flow-col gap-4 px-20">
        {destinations.slice(4, 5).map((dt) => (
          <div
            class="row-span-3  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 more-img1"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${dt.titleImg})`,
            }}></div>
        ))}
        <div class=" col-span-2   flex justify-evenly">
          {destinations.slice(5, 6).map((dt) => (
            <div
              class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 more-img2"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${dt.titleImg})`,
              }}></div>
          ))}
          {destinations.slice(6, 7).map((dt) => (
            <div
              class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 more-img3"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${dt.titleImg})`,
              }}></div>
          ))}
        </div>
        {destinations.slice(7, 8).map((dt) => (
          <div
            class="row-span-2 col-span-2   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 more-img4"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${dt.titleImg})`,
            }}> sdkf</div>
        ))}
        
      </div>
    </div>
  );
};

export default MoreDestination;
