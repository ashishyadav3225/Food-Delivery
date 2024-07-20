import { LOGO_URL } from "../utils/constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux'

const Header=()=>{



  const [btnNameReact,setBtnNameReact] = useState("login");

  const {loggedInUser} = useContext(UserContext);

//subscribing to store using selector

const cartItems = useSelector((store)=>store.cart.items)


  
  const onlineStatus= UseOnlineStatus();
    return(
    <div className='flex justify-between bg-pink-200 shadow-lg'>
      <div className='logo-container'>
        <img  className='w-56'src={LOGO_URL} alt="Food Delivery" />
      </div>
  
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status:{onlineStatus ?"🟢":"🔴"}</li>
         <li className="px-4"><Link to ='/'>Home</Link></li>
         <li className="px-4"><Link to ='/about'>About Us</Link> </li>
         <li className="px-4" ><Link to ='/contact'>Contact Us</Link></li>
         {/* <li className="px-4"><Link to ='/contact'>Contact Us</Link></li> */}
         <li className="px-4"><Link to ='/grocery'>Grocery</Link></li>
         <li className="px-4"><Link to ='/cart'>Cart- {cartItems.length} items</Link></li>
         <button className="login-btn" onClick={()=>{
          btnNameReact=== "login"?setBtnNameReact('logout'):setBtnNameReact('login');
         }}>
        {btnNameReact}
         </button>
         <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
    );
  };

  export default Header;