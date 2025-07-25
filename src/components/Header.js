import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";
import About from "./About";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus: ", onlineStatus);

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center shadow-lg bg-pink-50 sm:bg-yellow-100 lg:bg-orange-100">
      <div className="logo-container">
        <img className="w-20 mx-4" src={LOGO_URL} />
        <p className="font-bold px-6 mb-2 text-red-900 text-xl">Foodify</p>
      </div>
      <div className="flex">
        <ul className=" flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="./">Home</Link>
          </li>
          <li className="px-4">
            <Link to="./About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="./Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="./grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="./cart">
              <img
                className="w-6"
                src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
              />
              <span>({cartItems.length})</span>
            </Link>
          </li>
          <li className="px-4">
            <button
              className="bg-white px-2 rounded-lg font-semibold"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
