import StarIcon from "@mui/icons-material/Star";
import { CDN_URL, IMG_URL } from "../utils/constant.jsx";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.jsx";

const CartItemlist = ({ items }) => {

const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch an action
  dispatch(addItem(item));
}

const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
}
  return (
    <div className="p-4">
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center p-4 m-8 border-b-2 border-gray-200 bg-white shadow-sm rounded-lg">
          <div className="flex-1 text-left">
            <div className="text-orange-400">
              🥗💫Bestseller
            </div>
            <div className="mb-2">
              <span className="text-lg font-bold items-start">
                {item.card.info.name}
              </span>
              <div>
                <span className="text-left text-black font-medium">
                  &#x20B9;{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>
            <div>
              <span className="flex items-center text-green-700">
                <StarIcon className="w-2 h-2" />
                {item.card.info.ratings.aggregatedRating.rating || 4.2}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mt-2">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-28 h-28 relative">
            <button className="absolute top-20 right-3 p-2 px-3 rounded-lg bg-white shadow-lg text-green-500 font-bold" onClick = {() => handleRemoveItem(item)}>
              REMOVE
            </button>
            <img
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : IMG_URL
              }
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemlist;
