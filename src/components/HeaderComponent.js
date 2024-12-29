import { useContext, useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { userContext } from "./Context";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [click,setClick] = useState('Login');
  const statusCheck = useOnlineStatus();
  const {loggedinUser} = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items)
  console.log("cit",cartItems)
  return (
    <div className="flex justify-between bg-red-300 shadow-md p-2">
      <div className="logo">
        <img src={logo_url} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-extrabold">Status:{statusCheck ? "🟢" : "🔴"}</li>
          <li className="px-4 font-extrabold"><Link to="/">Home</Link></li>
          <li className="px-4 font-extrabold"><Link to="/about">About Us</Link></li>
          <li className="px-4 font-extrabold"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-extrabold"><Link to="/cart">Cart : {cartItems.length} Items</Link></li>
          <li className="px-4 font-extrabold"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-extrabold">User:{loggedinUser}</li>
          <button className="login font-extrabold" onClick={() =>{
           click === "Login" ? setClick("LogOut") : setClick("Login")
          }}>{click}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
