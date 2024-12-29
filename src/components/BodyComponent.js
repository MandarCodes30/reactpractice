import ResCard, { OpenCard } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { userContext } from "./Context";

const BodyComponent = () => {
  const [listofrestuarant, setlistofrestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const RestaurantOpen = OpenCard(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4807627&lng=73.8724301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI"
    );

    const json = await data.json();
    console.log("check", json.data.cards[1].card.card);
    const resData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setlistofrestuarant(resData);
    setFilteredList(resData);
  };

  const fetchStatus = useOnlineStatus();

  if (fetchStatus === false) {
    return <h1>You are Offline!!!</h1>;
  }

  const { loggedinUser, setUser } = useContext(userContext);
  return listofrestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restBody">
      <div className="flex items-center">
        <div className="search m-4 p-4">
          <input
            data-testid="searchInput"
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 bg-orange-400 m-2 font-extrabold rounded-lg"
            onClick={() => {
              const filteredRest = listofrestuarant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filteredRest.length > 0
                ? setFilteredList(filteredRest)
                : setFilteredList(listofrestuarant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 bg-orange-400 m-2 font-extrabold rounded-lg"
            onClick={() => {
              const filteredlist = listofrestuarant.filter(
                (res) => res.info.avgRatingString > 4.5
              );
              setFilteredList(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <input
            value={loggedinUser}
            className="border border-black"
            type="text"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurant/" + restuarant.info.id}
          >
            {restuarant.info.isOpen ? (
              <RestaurantOpen resData={restuarant} />
            ) : (
              <ResCard resData={restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
