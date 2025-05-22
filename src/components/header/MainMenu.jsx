import { Link } from "react-router-dom";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        

        <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Properties</Link>
        </li>
        {/* End Properties single menu */}

         <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Attractions</Link>
        </li>
        {/* End Attractions single menu */}

         <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Popular</Link>
        </li>
        {/* End Destinatinos single menu */}

       
       
      </ul>
    </nav>
  );
};

export default MainMenu;
