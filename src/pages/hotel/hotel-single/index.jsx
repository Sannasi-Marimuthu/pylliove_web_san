import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
// import DefaultHeader from "@/components/header/default-header";
import Header11 from "@/components/header/header-11";
import RatingTag from "@/components/hotel-single/RatingTag";
import AvailableRooms2 from "@/components/hotel-single/AvailableRooms2";
import ReviewProgress2 from "@/components/hotel-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "@/components/hotel-single/guest-reviews/DetailsReview2";
import ReplyForm from "@/components/hotel-single/ReplyForm";
import ReplyFormReview2 from "@/components/hotel-single/ReplyFormReview2";
import Facilities from "@/components/hotel-single/Facilities";

import Surroundings from "@/components/hotel-single/Surroundings";
import HelpfulFacts from "@/components/hotel-single/HelpfulFacts";
import Faq from "@/components/faq/Faq";
import Hotels2 from "@/components/hotels/Hotels2";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import MainFilterSearchBox from "@/components/hotel-list/hotel-list-v1/MainFilterSearchBox";
// import StickyHeader2 from "@/components/hotel-single/StickyHeader2";
import GalleryTwo from "@/components/hotel-single/GalleryTwo";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import HotelTabs from "@/components/hotel-single/HotelTabs";

const metadata = {
  title:
    "Hotel Single v2 || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

const HotelSingleDynamic = () => {
  let params = useParams();
  const id = params.id;
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End DefaultHeader */}
      <div style={{ backgroundColor: "#eef1f7" }}>
        <section
          className=" pb-40"
          style={{ marginLeft: "10em", marginTop: "5em" }}
        >
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
        {/* End Search filter top */}

        <GalleryTwo hotel={hotel} />

        {/* End gallery grid wrapper */}

        <div className="container">
          <div className="col-12 ">
            <HotelTabs />
          </div>
        </div>

        <div className="container mt-40">
          <div className="border-top-light"></div>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
};

export default HotelSingleDynamic;
