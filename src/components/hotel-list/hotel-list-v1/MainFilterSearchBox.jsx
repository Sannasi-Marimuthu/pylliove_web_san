import DateSearch from "../common/DateSearch";
import GuestSearch from "../common/GuestSearch";
import LocationSearch from "../common/LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div
        className="mainSearch px-20 py-10 lg:px-10 lg:pt-5 lg:pb-20 "
        style={{
          borderRadius: "0px 0px 40px 40px",
          marginInline: "auto",
          backgroundColor: "#fff",
          width: "100%",
          boxShadow: "2px 2px 5px 2px #aaaaaa",
          zIndex:"9"
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



      <div
        className="mainSearch px-20 py-15 lg:px-10 lg:pt-5 lg:pb-20 "
        style={{
          borderRadius: "0px 0px 40px 40px",
          marginInline: "auto",
          backgroundColor: "#fff",
          width: "80%",
          marginTop: "-2px",
          boxShadow: "2px 2px 5px 2px #aaaaaa",
        }}
      >
        <div className="d-flex button-grid1 items-center justify-content-between">
            <div className="row x-gap-10 y-gap-10">
                  <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"#000", fontWeight:"bold", backgroundColor:"#edf3ff"}}>
                      Most Popular
                    </p>
                  </div>

                  <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"#000", fontWeight:"bold", backgroundColor:"#edf3ff"}}>
                      Classic
                    </p>
                  </div>

                   <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"#000", fontWeight:"bold", backgroundColor:"#edf3ff"}}>
                      Executive
                    </p>
                  </div>

                   {/* <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"#000", fontWeight:"bold", backgroundColor:"#edf3ff"}}>
                      Py Olliv-Highest First
                    </p>
                  </div> */}

                </div>

          <div>
            <button className="d-flex  px-40 h-full col-4 justify-content-end" style={{border:"1px solid black", width:"22em", height:"30px" , borderRadius:"30px", backgroundColor:"#eff8f4", }}>
             <i className="icon-search text-18 mr-5 mt-1" />
           <span style={{textAlign:"center"}}>    Search Location or Property Name</span>
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
