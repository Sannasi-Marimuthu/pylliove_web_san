import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { hotelsData } from "../../data/hotels";
// import isTextMatched from "../../utils/isTextMatched";

const Hotels = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-hotels-next",
          prevEl: ".js-hotels-prev",
        }}
        pagination={{
          el: ".js-hotels-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {hotelsData.slice(0, 8).map((item) => (
          <SwiperSlide
            key={item?.id}
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            <Link
              to={`/hotel-single-v1/${item.id}`}
              className="hotelsCard -type-1 hover-inside-slider"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="hotelsCard__image">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
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
                              // src="https://www.maurya.com/wp-content/uploads/2017/09/Svasara-Suite-thumb.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                {/* End .cardImage */}
              </div>

               
               <div className="d-flex items-center mt-3 ">
                
                  
                  <div className="text-blue-1 text-dark" style={{border:"1px solid black", borderRadius:'20px', paddingInline:'15px'}}><h5>{item?.basic}</h5></div>
                <div className="text-blue-1  mx-2" style={{border:"1px solid gray", borderRadius:'20px', paddingInline:'15px'}}><h5 style={{color:"gray"}}>{item?.premium}</h5></div>
               </div>


              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1  lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#454545",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Destination
                    </p>
                    <p className="text-dark-1 lh-14 text-14 mt-5">
                      <i className="icon-location text-15 mr-10" />
                      {item?.location}
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#454545",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Duration
                    </p>
                    <p className="text-dark-1 lh-14 text-14 mt-5">
                      <i className="icon-clock text-15 mr-10" />{" "}
                      {item?.duration}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between items-center">
                  <div className="mt-5 d-flex flex-column">
                    <div className="fw-500">Starting from </div>
                    <div className="text-blue-1 text-bold">
                      <h2>$ {item?.price}</h2>
                    </div>
                  </div>
                  <button
                    href="#"
                    className="button -dark-1 bg-blue-1 text-white w-50 rounded-10"
                    style={{ height: "3em", borderRadius: "20px" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center sm:justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End .prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-hotels-pag" />
        </div>
        {/* End .pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End .next */}
      </div>
      {/* End navigation and pagination */}
    </>
  );
};

export default Hotels;
