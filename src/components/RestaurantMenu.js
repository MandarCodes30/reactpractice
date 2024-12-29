import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { useRestMenu } from "../utils/useRestMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [showItems,setShowItems] = useState(null);
  const menu = useRestMenu(resid);
  console.log("checlk", menu);

  if (menu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info;
  const itemCard =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  let menuVal = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuVal.filter(
    (category) =>
      category.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("categories", categories);
  return (
    <div className="Menu text-center">
      <h1 className="font-bold text-2xl my-3">{name}</h1>
      <h2 className="font-bold text-xl mb-3">{costForTwoMessage}</h2>
      <h3 className="font-bold text-xl mb-3">
        {cuisines && Array.isArray(cuisines) ? cuisines.join(", ") : ""}
      </h3>
      {/* <ul>
        {itemCard.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - {"Rs."} {item.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}

      {categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index===showItems ? true:false}
          setShowItems={()=>setShowItems(index)}
          collapseItems={()=>setShowItems(null)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
