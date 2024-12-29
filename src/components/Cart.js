import { useDispatch, useSelector } from "react-redux"
import { ListItems } from "./listItems"
import { clearCart } from "../utils/cartSlice";

export const Cart = () =>{
    const cartitem = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const clearCartItem = () =>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-2 p-2">
            <h1 className="font-bold">Cart</h1>
            <button className="border bg-black text-white p-2 m-2 rounded-md" onClick={()=>clearCartItem()}>Clear Cart</button>
            <div className="listItems w-6/12 m-auto">
                <ListItems items={cartitem}/>
            </div>
        </div>
    )
}