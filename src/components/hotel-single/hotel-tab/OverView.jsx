import React from "react";

const OverView = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12"
          style={{ boxShadow: "1px 0px 0px 2px rgba(0, 0, 0, 0.4)", backgroundColor:"#e0e8e9" , borderRadius:"5px"}}
        >
          <div className="px-24 py-20 rounded-4">
            <div className="row x-gap-20 y-gap-20 items-center">
              <div className="col-auto">
                <h4 className="text-18 lh-15 fw-500">About the Hotel</h4>
                <div className="text-18 lh-15 text-light-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hotel Norrebro OMR caters
                  to both leisure and business needs with its location,
                  amenities and dining options
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p className="text-14 text-light-1 mr-1">
                    Located opposite Elcot Sez, near IT parks and just 9 mins
                    from ECR beaches
                  </p>

                  <p className="text-14 text-light-1 mr-1">
                    This hotel is surrounded by lush greenery for a relaxing
                    vacation
                  </p>
                  <p className="text-14 text-light-1">
                    Enjoy global cuisine, including breakfast buffets, at SPICE
                    IT and hot drinks at NICO Coffee House & Bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
