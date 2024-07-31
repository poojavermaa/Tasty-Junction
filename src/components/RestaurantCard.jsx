import { CDN_URL } from "../utils/constant";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

// const RestaurantCard = ({resName, cusine}) => {
const RestaurantCard = (props) => {
  // console.log(props);
  // const { resName, cuisines } = props;
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
    
    const rating = avgRating > 4 ? "bg-green-500" : "bg-orange-400"

  return (
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm w-[22rem] transition duration-200 ease-in hover:shadow-2xl cursor-pointer">
  <img src={`${CDN_URL}${cloudinaryImageId}`} alt="res-img" className="w-full h-48 object-cover rounded-t-lg" />
  <div className="mt-4">
    <h4 className="text-xl font-bold text-gray-800 font-sans">{name}</h4>
    <h3 className="text-md text-gray-600 line-clamp-1">{cuisines.join(", ")}</h3>
  </div>
  <div className="mt-4 flex justify-between items-center">
    <div className={`${rating} px-[0.3rem] py-[0rem] flex flex-row items-center gap-0 font-open text-xs font-semibold text-white`} >
      <StarOutlineIcon /> <span className="text-[1rem]">{avgRating}</span>
    </div>
    <div className="text-gray-800">
      <h3 className="text-lg font-semibold">{costForTwo}</h3>
    </div>
    <div className="text-gray-500">
      <h3 className="text-lg font-semibold">{sla.slaString}</h3>
    </div>
  </div>
</div>

  );
};


// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-sm m-4">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
