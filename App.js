import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "25620",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 0.8,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "0.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-22 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹179",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
    type: "WEBLINK",
  },
};

const resObj1 = {
  info: {
    id: "50467",
    name: "Bakingo",
    cloudinaryImageId: "fa68ac0434f668bba1322abda36570b3",
    locality: "1st Block",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
    avgRating: 4.3,
    parentId: "3818",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 2.1,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-23 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
        <RestaurantCard resData={resObj1} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
