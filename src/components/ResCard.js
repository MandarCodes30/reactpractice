import { con_url } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating } = resData?.info;
  return (
    <div data-testid="resCard" className="m-4 p-4 w-60 h-96 bg-orange-100 rounded-lg font-extrabold hover:bg-orange-300">
      <img
        className="w-52 h-32 rounded-lg"
        src={
          con_url+
          resData.info.cloudinaryImageId
        }
      />
      <h3 className="py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};


export const OpenCard = () =>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">Open</label>
        <ResCard {...props}/>
      </div>
    )
  }
}
export default ResCard;
