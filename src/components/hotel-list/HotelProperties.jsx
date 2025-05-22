import { hotelsData } from "../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Link } from "react-router-dom";

const HotelProperties = () => {
  return (
    <>
      {hotelsData.slice(0, 7).map((item) => (
        <div className="col-12" key={item?.id} >
          <div>
            
            <div style={{boxShadow: "2px 3px 5px 2px #aaaaaa", borderRadius:'20px', paddingBottom:'1px', paddingTop:'10px'}}>


            <div className="row " style={{padding:"15px"}}>
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4  custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.slideImg?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <img
                              className="rounded-4 col-12 js-lazy"
                              src={slide}
                              alt="image"
                              style={{height:'220px'}}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <h3 className="text-18 lh-16 fw-500">{item?.title}</h3>

                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <p className="text-14">{item?.location}</p>
                  </div> 
                </div>

                <div >
                  <p className="text-14">Free cancellation. <span> Breakfast included</span> </p>
                  <p style={{color:"blue", fontSize:'12px'}} >&more</p>
                </div>

                <div className="text-16 lh-15 mt-10">
                  <div className="fw-500">King Room</div>
                  <div className="text-light-1">1 extra-large double bed</div>
                  <div className="text-light-1">1 bathroom</div>
                </div>
                <div className="row x-gap-10 y-gap-10">
                  <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"blue"}}>
                      #classic
                    </p>
                  </div>

                  <div className="col-auto">
                    <p className="border-light rounded-100 py-5 px-10 text-14 lh-14" style={{color:"blue"}}>
                      #excutive
                    </p>
                  </div>

                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <p className="text-16 lh-14 fw-500" style={{color:'#4f934f'}}>Excellent</p>
                    <p className="text-12 lh-14 text-light-1">
                      920 reviews
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center  fw-600 text-14 size-40" style={{borderRadius:"20px", width:"40px", height:'30px', backgroundColor:"#d2ffd2" , color:"#4f934f"}}>
                      {item?.ratings}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-22  mt-50 md:mt-20">
                    ${item?.price}
                  </div>
                  <div className="text-14 text-light-1 lh-12 fw-600 mt-5">
                    3 nights, 2 guest
                  </div>
                

                  <Link
                    to={`/hotel-single/${item.id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24" style={{borderRadius:"10px", height:"30px"}}
                  >
                    See Booking Option
                  </Link>
                </div>
                
              </div>
            </div>

            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default HotelProperties;
