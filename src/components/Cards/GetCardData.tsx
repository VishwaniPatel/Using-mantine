import axios from "axios";
import { useState, useEffect } from "react";
function GetCardData() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <div>
      {restaurants.map((restaurant: any) => (
        <div key={restaurant.restaurant_id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
      ))}
    </div>
  );
}
export default GetCardData;
