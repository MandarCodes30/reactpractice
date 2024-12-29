import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { con_url } from "../utils/constants";

export const ListItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) =>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-black border-b-2 rounded-lg"
          key={item.card.info.id}
          data-testid="fooditems"
        >
          <div className="flex justify-between">
            <div className="w-96">
              <div className="text-left">
                <span className="font-semibold text-left">
                  {item.card.info.name}
                </span>{" "}
                - ₹<span>{item.card.info.price / 100}</span>
              </div>
              <div className="text-xs text-left">
                {item.card.info.description}
              </div>
              <div className="flex justify-start mt-2">
                <button className="bg-black text-white rounded-lg p-2"
                onClick={()=>handleClick(item)}>
                  Add +
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-32 h-24"
                src={con_url + item.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
