import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import StarIcon from "@mui/icons-material/Star";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  // console.log(resInfo?.cards[2]?.card?.card);
  console.log(resInfo);
  const offers =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div>
      <div className="w-6/12 m-auto">
        <div className="flex justify-between">
          <div className="w-[90%]">
            <div className="text-left ml-2 mt-4">
              <h1 className="font-bold text-lg">{name}</h1>
              <h2 className="font-semibold text-sm mt-2">
                {cuisines.join(",")}
              </h2>
            </div>
            <div className="flex mt-4">
              <div className="text-left flex ml-2 w-full">
                <div className="flex items-center mr-4">
                  <span className="material-symbols-outlined">timelapse</span>
                  <h2 className="font-bold text-sm ml-1">{sla.slaString}</h2>
                </div>
                <div className="flex items-center ml-1">
                  <span className="material-symbols-outlined text-md">
                    currency_rupee_circle
                  </span>
                  <h2 className="font-bold text-sm ml-1">
                    {costForTwoMessage}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl h-[5rem] w-20 mt-5">
            <div className="font-bold text-green-700 flex justify-center items-center gap-[2px]">
              <StarIcon />
              {avgRatingString}
            </div>
            <div className="font-open text-[0.65rem] font-semibold text-gray-500">
              {totalRatingsString}
            </div>
          </div>
        </div>
        <div
          className="overflow-x-auto scrollbar-hide mt-8">
          <div className="flex flex-nowrap gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="border-gray-400 border-2 rounded-lg w-56 h-36 flex-shrink-0"
              >
                <div className="p-4 flex">
                  <div>
                  <p className="font-bold uppercase">{offer.info.header}</p>
                  </div>
                  <div className="ml-4">
                    <img className="w-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" alt="" />
                  </div>
                </div>
                <div className="flex p-2">
                  <p className="text-gray-700 mr-4 font-bold text-md">{offer.info.couponCode}</p>
                  <p className="text-gray-700 font-bold text-md">{offer.info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
