import Restaurantcard from "./Restaurantcard";

const Cardcontainer = () => {
    const restaurantData=[
        {
            imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"40-45",
            cuisine:"Chinese, Asian, Tibetan, Desserts",
            location:"Santacruz East"
            
        },
        {
            imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eibssqccoqhjgorsglso",
            title:"Natural Ice Cream",
            starRating:"4.5",
            deliveryTime:"45-50",
            cuisine:"Ice Cream, Desserts",
            location:"Sakinaka"
            
        },
        {
            imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_342079.JPG",
            title:"Chaayos Chai+Snacks=Relax",
            starRating:"4.5",
            deliveryTime:"45-50",
            cuisine:"Bakery, Beverages, Chaat, Desserts, Home Food, Italian, Maharashtrian, Snacks, Street Food, Sweets",
            location:"Scruz Bandra East"
            
        },
        {
            imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb1d7cd7173f315487ed009ba7ca8b9d",
            title:"PizzaExpress",
            starRating:"4.2",
            deliveryTime:"35-40",
            cuisine:"Pizzas, Italian",
            location:"Bandra Kurla Complex"
            
        }
    ];
    return(
      <div className="container d-flex flex-wrap gap-4">
        {restaurantData.map((restaurant)=>{
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
        })}
      
      
      </div>
    )
  }

  export default Cardcontainer ;