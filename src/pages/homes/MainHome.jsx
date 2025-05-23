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
import "./style.css";
import "./style1.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div style={{ backgroundColor: "#ecf0f7" }}>
      <Navbar />
      {/* Hero */}
      <div style={{ marginTop: "5.5em" }}>
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
              <path d="M0,1 C0.15,0.5 0.85,0.5 1,0 L1,0 L0,0 Z" />
            </clipPath>
            <filter
              id="waveShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="5"
                dy="-5"
                stdDeviation="5"
                flood-color="black"
                flood-opacity="0.3"
              />
            </filter>
          </defs>
        </svg>

        <div className="hero-section1">
          <div className="content-overlay1">
            <video
              className="video-content1"
              src="/media/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            <div className="top-left-text1">
              <div className="inner-text1 text-center1">
                <span style={{ fontSize: "15px" }}>Find the Top</span>
                <br />
                Hotel Nearby
              </div>
            </div>

            <div className="card-container1">
              <div className="card card1">
                <div className="row w-100 m-0">
                  <div className="col">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX41zpLGhK50L2Utz_ky0wiRCKMeEdGcBw3Q&s"
                      alt="Olliv Stay"
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv Stay
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/115/115902.png"
                      alt="Olliv Meet"
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv Meet
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3125/3125713.png"
                      alt="Olliv Fly"
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv Fly
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="https://www.shutterstock.com/image-vector/simple-design-bus-icon-600nw-2507119107.jpg"
                      alt="Olliv Bus"
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv Bus
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-W76NDiiQpjOLcRD2v9IzymklTVdLt5taw&s"
                      alt="Olliv Medicare"
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv Medicare
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card2">
              We Bring You Not Only A Stay Option, But An Experience In Your
              Budget To Enjoy The Luxury.
            </div>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="container" style={{ marginTop: "5em" }}>
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
          <div style={{ marginBottom: "-3em" }}>
            <Link
              to={"/hotelList"}
              className="button -md -dark-1 bg-blue-1 text-white"
              style={{
                borderRadius: "10px",
                height: "30px",
                width: "250px",
                height: "50px",
                marginInline: "auto",
              }}
            >
              See Booking Option
            </Link>
          </div>
        </div>
      </div>

      {/* Trending Search At Py-Olliv */}
      <div>
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
              <path d="M0,1 C0.15,0.5 0.85,0.5 1,0 L1,0 L0,0 Z" />
            </clipPath>
          </defs>
        </svg>

        <h3 className="heading">
          Trending Search At <span style={{color: "#2f5731"}}>Py-Olliv</span>
        </h3>

        <div className="section">
          <div className="right">
            <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="Hotel" />
          </div>
          <div className="left">
            <div className="item">
              <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" />
              <span>Beach Getaways In Goa</span>
            </div>

            <div className="item">
              <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" />
              <span>Business Stays In Bengaluru</span>
            </div>

            <div className="item">
              <img src="https://cdn-icons-png.flaticon.com/512/3176/3176297.png" />
              <span>Nature Retreats In Kochi</span>
            </div>

            <div className="item">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" />
              <span>Hill Station Escape In Shimla</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular hotels */}
      <div className="container mt-5">
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
