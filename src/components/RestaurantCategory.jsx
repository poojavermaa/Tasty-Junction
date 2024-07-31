import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ItemList from "./ItemList";
import { useState } from "react";
// import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex()
  };


  return (
    <div>
      <div className="w-6/12 bg-white p-4 m-auto my-4 text-black shadow-lg shadow-blue-100">
        {/* Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>
            {showItems === true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            {/* {<KeyboardArrowDownIcon />} */}
          </span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;