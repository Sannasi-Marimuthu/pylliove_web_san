import DealsFilter from "./sidebar/DealsFilter";
import SearchBox from "./sidebar/SearchBox";
import PopularFilters from "./sidebar/PopularFilters";
import AminitesFilter from "./sidebar/AminitesFilter";
// import Map from "./sidebar/Map";
// import RatingsFilter from "./sidebar/RatingsFilter";
// import GuestRatingFilters from "./sidebar/GuestRatingFilters";
// import StyleFilter from "./sidebar/StyleFilter";
// import PirceSlider from "./sidebar/PirceSlider";
import PaymentModes from "./sidebar/PaymentModes";
import PriceFilter from "./sidebar/PriceFilter";
import LocationFilter from "./sidebar/LocationFilter";
import UserRating from "./sidebar/UserRating";
import ChainsFilter from "./sidebar/ChainsFilter";
import HouseRules from "./sidebar/houseRules";
import PropertyType from "./sidebar/PropertyType";
import Amenities from "./sidebar/Amenities";

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "#fff",
         
        }}
      >
        <div className="sidebar__item   position-relative">
          <img
            src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            alt="hotel"
            className="rounded-2"
          />
        </div>
        {/* End find map */}

        <div className="sidebar__item  ">
          <SearchBox />
        </div>
        {/* End search box */}

        <div
          style={{
            border: "1px solid #cec6c6",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#f7fff7",
            borderTop: "0",
          }}
        >
          <p
            style={{
              border: "1px solid #cec6c6",
              fontSize: "12px",
              paddingInline: "6px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              marginTop: "-1.3rem",
              width: "120px",
              marginRight: "-.5rem",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Suggested For You
          </p>
          <div>
            <h5 className="text-18 fw-500 mb-10  mt-10">
              Previous Used Filters
            </h5>
            <div className="sidebar-checkbox">
              <div className="row y-gap-5 items-center">
                <DealsFilter  />
              </div>
            </div>
          </div>
          {/* End used filter */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Popular filters</h5>
            <div className="sidebar-checkbox">
              <PopularFilters />
            </div>
          </div>
          {/* End popular filter */}

          <div>
            <div className="form-checkbox d-flex items-center mt-20">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <h4 className="text-15 ml-10">
                Easy Check In <br />
                (6AM to 6PM)
              </h4>
            </div>
          </div>
          {/* End checkin */}

          <div>
            <div className="form-checkbox d-flex items-center mt-20">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <h4 className="text-15 ml-10">goStays</h4>
            </div>
          </div>
          {/* End gostays */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Price</h5>
            <div className="sidebar-checkbox">
              <PriceFilter />
            </div>
          </div>
          {/* End price Filter */}

          <div className=" ">
            <h5 className="text-18 fw-500 mb-10  mt-10">Location</h5>
            <div className="sidebar-checkbox">
              <div className="row y-gap-5 items-center">
                <LocationFilter />
              </div>
            </div>
          </div>
          {/* End location */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">User rating</h5>
            <div className="sidebar-checkbox">
              <UserRating />
            </div>
          </div>
          {/* End User Rating */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Chains</h5>
            <div className="sidebar-checkbox">
              <ChainsFilter />
            </div>
          </div>
          {/* End Chains */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Room Amenities</h5>
            <div className="sidebar-checkbox">
              <AminitesFilter />
            </div>
          </div>
          {/* End Aminities filter */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">House Rules</h5>
            <div className="sidebar-checkbox">
              <HouseRules />
            </div>
          </div>
          {/* End House Rules */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Property type</h5>
            <div className="sidebar-checkbox">
              <PropertyType />
            </div>
          </div>
          {/* End Property types */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Amenities</h5>

            <SearchBox />

            <div className="sidebar-checkbox">
              <Amenities />
            </div>
          </div>
          {/* End Property types */}

          <div>
            <h5 className="text-18 fw-500 mb-10 mt-10">Payment modes</h5>
            <div className="sidebar-checkbox">
              <PaymentModes />
            </div>
            {/* End Sidebar-checkbox */}
          </div>
          {/* End Aminities filter */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
