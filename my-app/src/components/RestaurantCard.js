import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props)=>{

    const {resData}= props;

    console.log(resData)
  
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,areaName,deliveryTime}=resData?.info
   
  
  
    return(
    <div data-testid='resCard' className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200'  >
      <img  className="res-logo rounded-lg"src={CDN_URL + cloudinaryImageId }alt="res-image" />
      <h3 className='font-bold py-4 text-lg' >{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
  
    </div>
    )
  };


  // higher order comopnent
   export  const withPromotedLabel=()=>{
      return (props)=>{
        return(
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard{...props}/>
          </div>
        )
      }

    }

  
  
  export default RestaurantCard;