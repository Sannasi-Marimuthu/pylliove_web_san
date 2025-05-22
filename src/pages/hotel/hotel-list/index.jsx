// import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import MainFilterSearchBox from "@/components/hotel-list/hotel-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "@/components/hotel-list/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/HotelProperties";
import Pagination from "@/components/hotel-list/common/Pagination";
import Sidebar from "@/components/hotel-list/Sidebar";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Hotel List || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

const HotelList = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}
<div style={{ backgroundColor: "#ecf0f7" }}>
      <section className=" pb-40" style={{marginLeft:"10em", marginTop:"5em"}}>
        <div className="container">
          <div className="row">
            <div className="col-10">
              
              {/* End text-center */}
              <MainFilterSearchBox />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}
     
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-3">
                <aside className="sidebar y-gap-40 xl:d-none">
                  <Sidebar />
                </aside>
                {/* End sidebar for desktop */}

                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="listingSidebar"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">
                      Filter Hotels
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* End offcanvas header */}

                  <div className="offcanvas-body">
                    <aside className="sidebar y-gap-40  xl:d-block">
                      <Sidebar />
                    </aside>
                  </div>
                  {/* End offcanvas body */}
                </div>
                {/* End mobile menu sidebar */}
              </div>
              {/* End col */}
              {/*  */}
              <div
                className="col-xl-9 "
                style={{
                  backgroundColor: "#fff",
                  paddingInline: "40px",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <TopHeaderFilter />
                  <div className="mt-30"></div>
                  {/* End mt--30 */}
                  <div className="row y-gap-30">
                    <HotelProperties />
                  </div>
                  {/* End .row */}
                  <Pagination />
                </div>
              </div>
              {/* End .col for right content */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End layout for listing sidebar and content */}

        {/* <CallToActions /> */}
        {/* End Call To Actions Section */}

        <DefaultFooter />
      </div>
    </>
  );
};

export default HotelList;
