import { Link } from "react-router-dom";
import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-18 fw-500 mb-5">{item.title}</h5>
          <div className="d-flex flex-column">
            {item.menuList.map((menu, i) => (
              <Link to={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
