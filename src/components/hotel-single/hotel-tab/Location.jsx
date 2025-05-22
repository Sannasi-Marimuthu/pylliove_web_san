import React from "react";

const Location = () => {
  return (
    <div>
      <div className="container" style={{backgroundColor:"#fff", padding:"50px", boxShadow:"2px 3px 3px 2px gray", borderRadius:"20px"}}>
        <div className="row ml-0 mr-0 items-center justify-content-evenly">
          <div className="col-xl-6 px-0">
            <h3 className="text-22">Location</h3>
            <img
              className="col-12" style={{width:"30em", borderRadius:"10px"}}
              src="https://www.shutterstock.com/shutterstock/videos/1093448511/thumb/11.jpg?ip=x480"
              alt="image" 
            />
          </div>
          {/* End .col */}

          <div className="col-lg-4 px-0" style={{backgroundColor:"#fff", padding:"30px", boxShadow:"0px 1px 0px 2px gray", borderRadius:"20px"}}>
            <h3 className="text-22">Key Landmarks</h3>
            <div className="d-flex flex-column ">
              <div className="d-flex justify-content-between items-center">
                <i class="icon-check text-10 mr-20"></i>
                <img
                  src="https://www.hotelscombined.in/himg/7b/e1/01/leonardo-104158-160195427-279728.jpg"
                  alt=""
                  width={60}
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-18">Meenambakkam Railway Station</p>

                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3148/3148411.png"
                    alt=""
                    width={15}
                    style={{ marginLeft: "5px" ,}}
                  />
                  <div className="text-12">2.2 Km</div>
                </div>
              </div>

              <div className="d-flex justify-content-between items-center mt-10">
                <i class="icon-check text-10 mr-20"></i>
                <img
                  src="https://www.momondo.in/himg/b3/9b/8f/revato-550852-12386707-632586.jpg"
                  alt=""
                  width={60}
                  style={{ borderRadius: "10px", marginRight:"50px" }}
                />
                <p className="text-18">Trisulam Railway Station</p>

                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3148/3148411.png"
                    alt=""
                    width={15}
                    style={{ marginLeft: "5px" }}
                  />
                  <div className="text-12">1.2 Km</div>
                </div>
              </div>

              <div className="d-flex justify-content-between items-center mt-10">
                <i class="icon-check text-10 mr-20"></i>
                <img
                  src="https://www.hotelscombined.in/himg/7b/e1/01/leonardo-104158-160195427-279728.jpg"
                  alt=""
                  width={60}
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-18">Subramanya Swamy 

Temple</p>

                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3148/3148411.png"
                    alt=""
                    width={15}
                    style={{ marginLeft: "5px" }}
                  />
                  <div className="text-12">2.2 Km</div>
                </div>
              </div>

               <div className="d-flex justify-content-between items-center mt-10">
                <i class="icon-check text-10 mr-20"></i>
                <img
                  src="https://www.momondo.in/himg/b3/9b/8f/revato-550852-12386707-632586.jpg"
                  alt=""
                  width={60}
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-18">Trisulam Railway Station</p>

                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3148/3148411.png"
                    alt=""
                    width={15}
                    style={{ marginLeft: "5px" }}
                  />
                  <div className="text-12">1.2 Km</div>
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </div>
  );
};

export default Location;
