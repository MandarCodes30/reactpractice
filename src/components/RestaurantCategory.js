import { ListItems } from "./listItems";

export const RestaurantCategory = ({
  data,
  showItems,
  setShowItems,
  collapseItems,
}) => {
  const handleClick = () => {
    if (setShowItems) {
      setShowItems();
    } else {
      collapseItems();
    }
  };

  return (
    <div className="restoCategory">
      <div className="p-4 w-6/12 mx-auto my-4 bg-orange-300 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-xl font-bold">
            {data.title} ({data.itemCards.length}){" "}
          </span>

          <span className="text-xl font-bold cursor-pointer">⬆️</span>
        </div>
        {showItems && <ListItems items={data.itemCards} />}
      </div>
    </div>
  );
};
