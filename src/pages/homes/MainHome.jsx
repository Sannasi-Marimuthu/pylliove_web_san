import DefaultFooter from "@/components/footer/default";
import Hotels from "@/components/hotels/Hotels";
// import PopularHotels from "@/components/home/PopularHotels";
import Navbar from "@/components/navbar/Navbar";
// import Navbar from "@/components/navbar/Navbar";
// import DefaultFooter from "../../components/footer/default/index";
import React from "react";

const MainHome = () => {
  return (
    <div style={{ backgroundColor: "#ecf0f7" }}>
      <Navbar />

      {/* Popular hotels */}
      <div className="container" style={{ marginTop: "10rem"}}>
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
