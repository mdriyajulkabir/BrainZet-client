import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Details.css";
const Details = () => {
  const { _id } = useParams();
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/destination/${_id}`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  console.log(destinations);
  return (
    <div>
      <Header />
      <div className="details-container">
        <div className="details-bg">
          <img src={destinations.titleImg} alt="" />
        </div>
        <div className="details-nav">
          <h1 style={{ color: "rgba(0, 167, 127, 1)" }}>ABOUT</h1>
          <h1>NEIGHBORHOODS</h1>
          <h1>SCHOOLS</h1>
          <h1>JOBS</h1>
          <h1>LEISURE AND PARKS</h1>
        </div>
        <div className="p-10">
          <div className="grid sm:grid-cols-2 gap-20">
            <div>
            <div className="details-description">
              <h1>{destinations.description1}</h1>
              <br />
              <h1>{destinations.description2}</h1>
              <br />
              <h1>{destinations.description3}</h1>
            </div>
            <div className="mt-12">
                <h1 className="mb-4 art">ARTICLES ABOUT PARTY</h1>
                <div className='grid grid-cols-3 gap-x-4'>
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 article-img"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${destinations.articleImg1})`,
                  }}> <br /> <br /><br /> <br /> <br /> <br />
                      <h1 className="px-2">{destinations.articleName1}</h1>
                    </div>
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 article-img"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${destinations.articleImg2})`,
                  }}><br /> <br /><br /> <br /> <br /> <br />
                      <h1 className="px-2">{destinations.articleName2}</h1>
                    </div>
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 article-img"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0% ,rgba(0, 0, 0, 0.92)100%),url(${destinations.articleImg3})`,
                  }}><br /> <br /><br /> <br /> <br /> <br />
                      <h1 className="px-2">{destinations.articleName3}</h1>
                    </div>
                </div>
            </div>
            </div>
            <div>
              <div className="city-details">
                <div>
                  <h1>CITY SIZE</h1>
                  <div className="flex">
                    <div className="mr-4">
                      <i class="fas fa-users"></i>
                    </div>
                    <div>
                      <h1>{destinations.citySize}</h1>
                      <h1>{destinations.date}</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>WEATHER</h1>
                  <div className="flex">
                    <div className="mr-4">
                      <i class="fas fa-cloud-sun-rain"></i> <br />
                      <i class="fas fa-cloud-sun"></i>
                    </div>
                    <div className="font-bold">
                      <h1>High- {destinations.weatherHigh}</h1>
                      <h1>Low- {destinations.weatherLow}</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1>SAFETY</h1>
                  <i class="fas fa-star mr-4"></i> 4.3
                </div>
              </div>
              {/* details img */}
              <div className="w-full mt-6">
                    <img src={destinations.img1} className='details-img1'  alt="" />
                    <div className="grid grid-cols-2 mt-4 gap-x-2">
                        <div><img src={destinations.img2} className='details-img2' alt="" /></div>
                        <div><img src={destinations.img3} className='details-img2' alt="" /></div>
                    </div>
              </div>
              {/* monthly payment */}
              <div className="mt-6">
                  <h1 className='dis'>MONTHLY SPEND FOR A FAMILY OF 4</h1>
                  <div className="money-details">
                        <div className="money-div">
                            <h1 className='text-sm'>RENT</h1> <br />
                            <h2 className='font-bold text-base'>${destinations.familyRent}</h2> <br />
                            <h3>This is for a 3 bedroom(40Sqm) within city center.</h3>
                        </div>
                        <div className="money-div">
                            <h1 className='text-sm'>GROCERIES</h1><br />
                            <h2 className='font-bold text-base'>${destinations.familyGroceries}</h2><br />
                            <h3>The average cost of Groceries for a family of 4.</h3>
                        </div>
                        <div className="money-div">
                            <h1 className='text-sm'>OTHERS</h1><br />
                            <h2 className='font-bold text-base'>${destinations.familyOthers}</h2><br />
                            <h3>the average monthly cost of Gas, Water, Electricity, and Internet.</h3>
                        </div>
                        <div className="money-div2">
                            <h1 className='text-sm'>TOTAL</h1><br />
                            <h2 className='font-bold text-base'>${destinations.familyTotal}</h2> <br />
                            <h3>This is the average mothly spending for a family of four(4)</h3>
                        </div>
                  </div>
              </div>
              {/* personal */}
              <div className="mt-6">
                  <h1 className='dis'>MONTHLY SPEND FOR A INDIVIDUAL</h1>
                  <div className="money-details">
                        <div className="money-div">
                            <h1 className='text-sm'>RENT</h1> <br />
                            <h2 className='font-bold text-base'>${destinations.personRent}</h2> <br />
                            <h3>This is for a 3 bedroom(40Sqm) within city center.</h3>
                        </div>
                        <div className="money-div">
                            <h1 className='text-sm'>GROCERIES</h1><br />
                            <h2 className='font-bold text-base'>${destinations.personGroceries}</h2><br />
                            <h3>The average cost of Groceries for a family of 4.</h3>
                        </div>
                        <div className="money-div">
                            <h1 className='text-sm'>OTHERS</h1><br />
                            <h2 className='font-bold text-base'>${destinations.personOthers}</h2><br />
                            <h3>the average monthly cost of Gas, Water, Electricity, and Internet.</h3>
                        </div>
                        <div className="money-div2">
                            <h1 className='text-sm'>TOTAL</h1><br />
                            <h2 className='font-bold text-base'>${destinations.personTotal}</h2> <br />
                            <h3>This is the average mothly spending for a family of four(4)</h3>
                        </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
