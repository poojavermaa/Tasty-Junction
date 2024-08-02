import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import PercentIcon from "@mui/icons-material/Percent";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [location, setLocation] = useState(null);

  const onlineStatus = useOnlineStatus();

  // const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const data = await fetch("https://ipapi.co/json");
      const json = await data.json();
      setLocation(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="place-items-center navbar flex  items-center w-full  max-[800px]:justify-between">
        <div className="left flex w-44 justify-center items-center  lg:gap-3 max-[1000px]:w-[60%] max-[660px]:w-full">
          <Link className="flex justify-center items-center pl-14" to="/">
            <img
              className=" pt-4 py-2 logo w-40 lg:w-52"
              src="src/image/logo1.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="workplace flex  gap-2 items-center justify-start font-semibold p-2 m-2 max-[1000px]:w-[40%]">
          <LocationOnOutlinedIcon className="location" />
          <p className="text-xs lg:text-lg w-[8rem]">
            {" "}
            {location !== null
              ? location?.city +
                ", " +
                location?.region +
                ", " +
                location?.country_name
              : " "}
          </p>
        </div>
        <div className="flex justify-center pl-28 items-center pr-6 max-[660px]:hidden">
          <ul className="flex px-2 m-2 justify-center items-center">
            <li className="p-4 text-lg flex gap-[5px justify-center items-center cursor-pointer p-2 max-[1000px]:hidden"><PercentIcon/> Offers</li>
            <li className="p-4 text-lg flex  gap-[5px] justify-center items-center cursor-pointer max-[1000px]:hidden "><SearchIcon/>Search</li>
            <li className="p-4 text-lg flex  gap-[5px] justify-center items-center cursor-pointer  max-[1000px]:hidden ">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
            <Link to="/about">
              <li className="p-4 text-lg flex  gap-[5px] justify-center items-center cursor-pointer  max-[1000px]:hidden "><AccountCircleOutlinedIcon /> About me</li>
            </Link>
           <Link to="/cart">
           <li className="p-4 text-lg flex  gap-[5px] justify-center items-center cursor-pointer">
              <ShoppingCartOutlinedIcon /> <div className="absolute top-[3rem] right-[11.2rem]  bg-blue-300 text-white text-sm rounded-full w-[1rem] h-[1rem] flex items-center justify-center">{cartItems.length}</div>
              Cart
            </li>
           </Link>
            <Link to="/login"><button
              className="p-4 text-lg flex  gap-[5px] justify-center items-center cursor-pointer  w-24"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              <LoginOutlinedIcon />
              {btnName}
            </button></Link>
            {/* <li className="font-bold">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
     </div>
  );
};

export default Header;
