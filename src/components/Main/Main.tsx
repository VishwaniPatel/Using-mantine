import { log } from "console";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../../environment";
function Main() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    if (json) {
      console.log(json.data?.cards[2].data.data.cards); //get data from api

      setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
    } else {
      console.log("No data found");
    }
  }

  return <div className="restaurant-lists"></div>;
}

export default Main;
