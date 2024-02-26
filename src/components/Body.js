import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resList);
  console.log(listofRestaurants);

  //   let listofRestaurantsJS = [
  //     {
  //       info: {
  //         id: "201223",
  //         name: "Asha tiffins",
  //         cloudinaryImageId: "n15vckntsiboiod3gpco",
  //         locality: "HSR Layout",
  //         areaName: "Hsr Layout",
  //         costForTwo: "₹200 for two",
  //         cuisines: [
  //           "South Indian",
  //           "North Indian",
  //           "Chinese",
  //           "Desserts",
  //           "Beverages",
  //         ],
  //         avgRating: 4.5,
  //         parentId: "236243",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "201224",
  //         name: "Uduppi",
  //         cloudinaryImageId: "n15vckntsiboiod3gpco",
  //         locality: "HSR Layout",
  //         areaName: "Hsr Layout",
  //         costForTwo: "₹200 for two",
  //         cuisines: [
  //           "South Indian",
  //           "North Indian",
  //           "Chinese",
  //           "Desserts",
  //           "Beverages",
  //         ],
  //         avgRating: 3.8,
  //         parentId: "236243",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "201229",
  //         name: "KFC",
  //         cloudinaryImageId: "n15vckntsiboiod3gpco",
  //         locality: "HSR Layout",
  //         areaName: "Hsr Layout",
  //         costForTwo: "₹200 for two",
  //         cuisines: [
  //           "South Indian",
  //           "North Indian",
  //           "Chinese",
  //           "Desserts",
  //           "Beverages",
  //         ],
  //         avgRating: 4.1,
  //         parentId: "236243",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="fillter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setlistofRestaurants(filteredList);
          }}
          //   onMouseOver={() => {
          //     console.log("Button Clicked");
          //   }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
