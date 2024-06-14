import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "../const/config";
import { imgUrl } from "../const/config";
import { useState } from "react";

const Cardcontainer = () => {
    const [restaurantData, setRestaurantData] = useState( restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log("restaurantList" , restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// setRestaurantData( restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

// const filterRestaurants =()=>{
//    restaurant = restaurant.filter((restaurant)=>{
//         return(
//             restaurant?.info?.avgRating>=4.5
//         )
//     })
//     console.log("restaurants",restaurant)
// }

    return(
      <div className="container d-flex flex-wrap gap-4">
        {/* <button onClick={filterRestaurants}>Top Rated Restaurants</button> */}
        {
            restaurantData.map((restaurant)=>{
                return(
                    <Restaurantcard
                    key={restaurant?.info?.id}
            // imgUrl={imgUrl + restaurant?.info?.cloudinaryImageId}
            // title={restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRating}
            // deliveryTime={restaurant?.info?.sla?.deliveryTime}
            // cuisine={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}
            {...restaurant?.info}
            />
                )
            })
            
        }
        

        {/* {restaurantData.map((restaurant)=>{
            return (
                <Restaurantcard 
                {...restaurant}
                // imgUrl={restaurant?.imgUrl}
                // title={restaurant?.title}
                // starRating={restaurant?.starRating}
                // deliveryTime={restaurant?.deliveryTime}
                // cuisine={restaurant?.cuisine}
                // location={restaurant?.location}
      />
            )
        })} */}
      
      
      </div>
    )
  }

  export default Cardcontainer ;