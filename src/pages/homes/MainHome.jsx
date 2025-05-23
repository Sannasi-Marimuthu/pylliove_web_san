import DefaultFooter from "@/components/footer/default";
import DateSearch from "@/components/hotel-list/common/DateSearch";
import GuestSearch from "@/components/hotel-list/common/GuestSearch";
import LocationSearch from "@/components/hotel-list/common/LocationSearch";
import Hotels from "@/components/hotels/Hotels";
// import PopularHotels from "@/components/home/PopularHotels";
import Navbar from "@/components/navbar/Navbar";
// import Navbar from "@/components/navbar/Navbar";
// import DefaultFooter from "../../components/footer/default/index";
import React from "react";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div style={{ backgroundColor: "#ecf0f7" }}>
      <Navbar />

      {/* Search Box */}
      <div className="container" style={{marginTop:"7em"}}>
        <div
        className="mainSearch px-20 py-10 lg:px-10 lg:pt-5 lg:pb-20 " 
        style={{
          borderRadius: "20px",
          marginInline: "auto",
          backgroundColor: "#fff",
          width: "85%",
          boxShadow: "2px 2px 5px 2px #aaaaaa",
          zIndex: "9",
        }}
      >
        <div className="button-grid items-center justify-content-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-10 lg:py-20  sm:px-20 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div>
          {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          {/* <div className="button-item h-full">
            <button className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div> */}
          {/* End search button_item */}
        </div>
      </div>
      </div>

      {/* Popular hotels */}
      <div className="container">
        <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
          <Hotels />
        </div>
      </div>

      {/* Unique selling proposition */}

      <div
        className="container  -w-1500 rounded-4 "
        style={{
          marginTop: "3rem",
          borderRadius: "40px",
          backgroundColor: "#e6ffe6",
        }}
      >
        <div>
          <h1 style={{ marginLeft: "20px", color: "#4b5e4b" }}>
            Unique Selling Proposition
          </h1>
        </div>

        <div className="row y-gap-30 items-center justify-between mt-10">
          <div>
            <div className="d-flex justify-content-evenly">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px  #888888",
                }}
              >
                Single Price
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Free Refreshment Stay
              </h4>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Free Cancelation
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Technological Advanced gym
              </h4>
            </div>
            <div className="d-flex justify-content-evenly mt-3 mb-4">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Medical Assistant
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Cutting Edge Conference Room
              </h4>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* Image */}

      <div
        className="container p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://rotary-linens.com/cdn/shop/files/resort-supplies_1880x.jpg?v=1716778201')",
          height: 400,
          borderRadius: 10,
          marginTop: "50px",
          width: "100%",
        }}
      ></div>
      <DefaultFooter />
    </div>
  );
};

export default MainHome;
