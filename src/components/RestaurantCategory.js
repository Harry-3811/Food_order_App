import ItemLists from "./ItemLists";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("Clicked");
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordion body - create an another component with name itemLists */}
        {showItems && <ItemLists items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
