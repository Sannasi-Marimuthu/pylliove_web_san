
import AppButton from "./AppButton";

const Copyright = () => {
  return (
    <div className=" d-flex flex-row justify-content-between flex-wrap">
      <div className="d-flex flex-column">
        <h5 className="text-18 fw-500 mb-5">Follow Us</h5>
        <div className="d-flex flex-row justify-content-between">
          
          <div className="d-flex flex-row gap-3  mt-2">
         
          <a href="#">
            <i className="icon icon-instagram" style={{fontSize:"25px", color:"#4b5e4b"}}></i>
          </a>
          <a href="#">
            <i className="icon icon-facebook" style={{fontSize:"25px", color:"#4b5e4b"}}></i>
          </a>
          <a href="#">
            <i className="icon icon-twitter" style={{fontSize:"25px", color:"#4b5e4b"}}></i>
          </a>
           <a href="#">
            <i className="icon icon-youtube" style={{fontSize:"25px", color:"#4b5e4b"}}></i>
          </a>
         
        </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <h5 className="text-18 fw-500 mb-5">
          Book tickets faster.Downloded our mobile Apps
        </h5>
        <div className="d-flex justify-content-between ">
          <AppButton />
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <div className="d-flex flex-row gap-3">
          <a href="#">
            <img src="/img/payment/paytm.png" alt="" width={80} />
          </a>
          <a href="#">
            <img src="/img/payment/rupay.png" alt="" width={80} />{" "}
          </a>
        </div>

        <div className="d-flex flex-row gap-3 mt-10">
          <a href="#">
            {" "}
            <img
              src="/img/payment/visa.png"
              alt=""
              style={{ width: "80px", height: "25px" }}
            />
          </a>
          <a href="#">
            <img
              src="/img/payment/mestro.png"
              alt=""
              style={{ width: "80px", height: "25px" }}
            />{" "}
          </a>
        </div>

        <div className="d-flex flex-row gap-3 ">
          <a href="#">
            <img
              src="/img/payment/paypal.png"
              alt=""
              style={{ width: "100%", height: "80px", marginTop: "-15px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
