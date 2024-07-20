import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    };
    const cartItems = useSelector((store)=>store.cart.items)
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">CART</h1>
            <div className="w-6/12 m-auto  p-4"> 
            <button className="p-2 m-2 bg-black text-white"onClick={handleClearCart}>clear cart</button>
            {cartItems.length === 0 && (<h1>Cart is empty. Please add Items to the cart</h1>)}
            <ItemList items={cartItems}/></div>
        </div>
    )
}

export default Cart