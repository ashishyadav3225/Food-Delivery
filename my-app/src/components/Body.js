import RestaurantCard,{withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]= useState([]);

  const [searchText, setSearchText] = useState("");

  const restaurantCardPromoted  = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

   

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = UseOnlineStatus();

  if (onlineStatus === false)
    return(<h1>please check your internet connection </h1>);

  //  conditional rendering
  // if (listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid='searchInput'
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
          className="px-4 py-1 bg-green-100 m-4 rounded-sm"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant)
            }}
          >
            search
          </button>
        
        </div>

        <div className="search m-4 p-4 "  >
        <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id } to={"/restaurants/" + restaurant.info.id }>
          {restaurant.info.promoted ?(<restaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData={restaurant} />)}
           </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
