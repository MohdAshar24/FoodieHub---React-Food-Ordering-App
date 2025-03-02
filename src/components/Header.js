import { useState } from "react";
import { Link } from "react-router-dom";
import { HADR_LOGO } from "../utils/constants.js";
const Header = () => {
  const [btnnamereact, setbtnnamereact] = useState("login");

  return (
    <div className="header">
      <div className="logo">
        <img src={HADR_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnnamereact === "login"
                ? setbtnnamereact("logout")
                : setbtnnamereact("login");
            }}
          >
            {btnnamereact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
