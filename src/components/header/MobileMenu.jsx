import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu) => {
      megaMenu?.menuCol?.map((megaCol) => {
        megaCol?.menuItems?.map((item) => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split("/")[1] == pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/pylliove_logo1.png" alt="brand" width={100} />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>



          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Properties
          </MenuItem>
          {/* End  Properties Menu */}

            
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Attractions
          </MenuItem>
          {/* End  Attractions Menu */}


          
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Popular
          </MenuItem>
          {/* End  Popular Menu */}





          
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
     
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white rounded-2"
            to="/#"
          >
            My Trips
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
