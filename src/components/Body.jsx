import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SearchIcon from "@mui/icons-material/Search";

const Body = () => {
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // console.log(listOfRestaurant);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=25.3416089&lng=82.98158169999999"
      );

      const json = await data.json();
      // console.log(json);

      //Optional chanining
      // const fetchedRestaurant = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurant(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants || resList
      );
      setFilteredRestaurants(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants || resList
      );
    } catch (error) {
      setError("Failed to fetch data");
      setListOfRestaurant(resList);
      setFilteredRestaurants(resList);
    }
  };
  

  // if(listOfRestaurant.length === 0) {
  //   return (
  //     <h1>Loading..</h1>
  //   )
  // }

  // const {costForTwo} = resInfo?.cards[2]?.card?.card?.info;
  // const {costForTwo} = resInfo?.cards[2]?.card?.card;


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like you are offline!!!. Please check your internet Connection.
      </h1>
    );
  }

  // Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return (
  //     <Shimmer />
  //   );
  // };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <div className="w-[90%] flex justify-center items-center  max-[760px]:flex-col max-[760px]:w-full max-[760px]:gap-4 max-[760px]:pr-2 ">
        <div className="w-[30%]  flex justify-center  ">
          <input
            type="text"
            placeholder="SEARCH"
            className="p-1 m-2 bg-black/10 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="flex justify-center items-center gap-2 p-2 px-3 m-2 bg-green-300 rounded text-sm text-gray-800 font-semibold hover:shadow-lg transition duration-200"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurant(filteredRestaurant);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            <span className="p-[0.2rem]">
              <SearchIcon />
            </span>
            SEARCH
          </button>
        </div>
        <div className="w-[75%] flex justify-center mr-2 items-center gap-3 rounded-lg  max-[760px]:w-full max-[760px]:bg-gray-200 max-[760px]:font-bold">
          <button
            className="m-2 font-semibold text-lg hover:bg-gray-100 px-2  py-1 text-gray-800 p-2 rounded-md hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px]"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              // setListOfRestaurant(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button className="p-2 m-2 hover:bg-gray-100 px-2 rounded-md py-1 font-semibold text-lg text-gray-800  hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px]" onClick={() => {
              const sortedList = [...listOfRestaurant].sort(
                (a, b) => a.info.deliveryTime - b.info.deliveryTime
              );
              setFilteredRestaurants(sortedList);
            }}>
            Delivery Time
          </button>
          <button className="p-2 m-2 font-semibold text-lg hover:bg-gray-100 px-2 rounded-md py-1 text-gray-800  hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px]" onClick={() => {
            const sortedList = [...listOfRestaurant].sort((a,b) => a.info.costForTwo - b.info.costForTwo);
            setFilteredRestaurants(sortedList);
          }}>
            Cost: Low To High
          </button>
          <button className="p-2 m-2 font-semibold text-lg hover:bg-gray-100 px-2 rounded-md py-1 text-gray-800 hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px]" onClick={()=>{
            const sortedList = [...listOfRestaurant].sort((a, b) => b.info.costForTwo - a.info.costForTwo);
            setFilteredRestaurants(sortedList);
          }}>
            Cost: High To Low
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-2 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* <RestaurantCard resData={restaurant} /> */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant}/>
            ) : (
              <RestaurantCard resData={restaurant}/>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
