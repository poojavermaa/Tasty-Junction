import resList from "../utils/mockData";
import { useEffect, useState } from "react";

    const useRestaurantCard = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    // const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [error, setError] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.3416089&lng=82.98158169999999");
    
        const json = await data.json();
        console.log(json);
    
        //Optional chanining
        // const fetchedRestaurant = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || resList);
        setFilteredRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || resList);
      }catch (error) {
        setError("Failed to fetch data");
        setListOfRestaurant(resList);
        setFilteredRestaurants(resList);
      }
    };


    return listOfRestaurant;
}

export default useRestaurantCard;